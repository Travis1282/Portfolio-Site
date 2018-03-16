

	let iframeActivate = {
		navToggle: document.querySelector('.nav-toggle'),
		nav: document.querySelector('nav'),

		doToggle: function(e) {
			// if (e != '') e.preventDefault();
			window.addEventListener('keydown', keydown);
			this.navToggle.classList.toggle('expanded')
			this.nav.classList.toggle('expanded');
		}
	};

(function() {
	iframeActivate.navToggle.addEventListener('click', function(e) { iframeActivate.doToggle(e); });

}());
