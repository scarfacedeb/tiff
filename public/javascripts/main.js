require.config({
  paths: {
    "jquery": "../bower_components/jquery/jquery.min",
    "jquery-ui": "../bower_components/jquery-ui/ui/minified/jquery-ui.min",
    "jquery-color": "lib/jquery-color/jquery.color-2.1.2.min",
    "webfont": "lib/webfontloader/webfont.min",
    "zoomooz": "lib/jquery-zoomooz/jquery.zoomooz.min",
    "messenger": "../bower_components/messenger/build/js/messenger.min",
    "messenger-theme-future": "../bower_components/messenger/build/js/messenger-theme-future",
  },
  shim: {
    "jquery-ui": ["jquery"],
    "jquery-color": ["jquery"],
    "zoomooz": ["jquery"],
    "messenger": ["jquery"],
    "messenger-theme-future": ["jquery", "messenger"],
    "webfont": ["jquery"]
  }
});

require(['tiff']);
