function onDeviceReady(arg) {
  var t = (self.invokeString) ? invokeString : t;
  document.body.appendChild(document.createTextNode("invokeString: " + t));
  document.body.appendChild(document.createElement("br"));
}

function handleOpenURL(openUrl) {
  document.body.appendChild(document.createTextNode("openUrl: " + openUrl));
  document.body.appendChild(document.createElement("br"));
}

function janrainWidgetOnload(auth_something) {
  janrain.events.onModalWidgetReady.addHandler(function(response) {
    document.getElementsByTagName("a")[0].onclick();
  });
}

(function() {
  if (typeof window.janrain !== 'object') window.janrain = {};
  window.janrain.settings = {};

  //var redirect_uri = encodeURIComponent("jrfccdmobdiafiebjhbghn://finish");
  var redirect_uri = encodeURIComponent("intent:#Intent;action=com.phonegap.example.JR_ENGAGE;" +
      "S.some_variable=123456;package=com.phonegap.example;end");
  //var redirect_uri = 'file://android_asset/www/index.html';
  janrain.settings.tokenUrl = 'http://nathan-mac.janrain.com:8080/login?redirect=' + redirect_uri;
  janrain.settings.type = 'modal';
  janrain.settings.linkClass = 'janrainModal';
  janrain.settings.returnExperienceTimeout = 5000;
  janrain.settings.forceReauth = true;

  function isReady() {
    janrain.ready = true;
  }

  if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", isReady, false);
  } else {
    window.attachEvent('onload', isReady);
  }

  var e = document.createElement('script');
  e.type = 'text/javascript';
  e.id = 'janrainAuthWidget';

  if (document.location.protocol === 'https:') {
    e.src = 'https://nathan-dev.janrain.com:8080/js/lib/reallyfirstapp/engage.js';
  } else {
    e.src = 'http://nathan-dev.janrain.com:8080/js/lib/reallyfirstapp/engage.js';
  }

  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(e, s);
})();
