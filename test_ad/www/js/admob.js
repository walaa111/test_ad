var admobid={}
  if( /(android)/i.test(navigator.userAgent) ) {
  admobid = { // for Android
  banner: 'ca-app-pub-8356095399620813~1240630064',
  interstitial: 'ca-app-pub-8356095399620813/1521553863'
  }
}
else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
  admobid = { // for iOS
  banner: 'ca-app-pub-8356095399620813~1240630064',
  interstitial: 'ca-app-pub-8356095399620813/1521553863'
  };
}
else {
  admobid = { // for Windows Phone
  banner: 'ca-app-pub-8356095399620813~1240630064',
  interstitial: 'ca-app-pub-8356095399620813/1521553863'
  };
}

AdMob.createBanner( admobid.banner );

AdMob.createBanner({
	adId: admobid.banner,
	position: AdMob.AD_POSITION.BOTTOM_CENTER,
	autoShow: true,
	success: function(){
	},
	error: function(){
		alert('failed to create banner');
	}
});
