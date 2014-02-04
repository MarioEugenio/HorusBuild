var app = {

	initialize : function() {
		this.bindEvents();
	},

	bindEvents : function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},

	onDeviceReady : function() {

		if (parseFloat(window.device.version) >= 7.0) {
			document.body.style.marginTop = "20px";
		}

	},

    titlebarIOS : function () {
        if (Ext.os.is.iOS && Ext.os.version.major >= 7) {
            Ext.select(".x-toolbar").applyStyles("height: 62px !important; padding-top: 15px !important;");
        }
    }

};