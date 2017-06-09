var LocationOfImages = ["./link/gwnu.jpg","./link/library.jpg","./link/community.jpg","./link/Elearning.jpg","./link/donation.jpg","./link/clean.jpg","./link/infoShare.jpg"];
var artOfImages = ["강릉원주대","도서관","커뮤니티","이러닝","후원","청렴센터","정보공유"];
var linkOfA = ["http://www.gwnu.ac.kr/mbs/kr/main_index.html","http://iskul.gwnu.ac.kr/wonju/index.ax","http://portal.gwnu.ac.kr/enview/portal/gwnu/stu/lms.page?","http://eln.gwnu.ac.kr/","https://fund.gwnu.ac.kr/","https://cheongryum.gwnu.ac.kr/","http://web.gwnu.ac.kr/infor_open/index.php"]
var Timer = null;
var count = 0;
function BannerMoving(){
    var imgs = document.getElementsByTagName("img");
    var a1 = document.getElementById("link1");
    var a2 = document.getElementById("link2");
    var a3 = document.getElementById("link3");
    var a4 = document.getElementById("link4");
    var a5 = document.getElementById("link5");
    for(i = 1; i < imgs.length; i++){
      var img = imgs[i];
      img.src = LocationOfImages[count];
      img.alt = artOfImages[count];
      img.addEventListener("mouseover",stopMoving,true);
      img.addEventListener("mouseout",moving,true);
      switch(i){
        case 1:
          a1.href=linkOfA[count];break;
        case 2:
          a2.href=linkOfA[count];break;
        case 3:
          a3.href=linkOfA[count];break;
        case 4:
          a4.href=linkOfA[count];break;
        case 5:
          a5.href=linkOfA[count];break;
      }
      count++;
      count = count % 6;
    }

}
function stopMoving(){
  clearInterval(Timer);
}
function moving(){
  Timer = setInterval("BannerMoving()",2000);
}

function initialize() {
  var mapCanvas = document.getElementById('map-canvas');
  var myLatlng = new google.maps.LatLng(37.304858, 127.922545);		// 위경도 설정
  var mapOptions = {			// 구글 맵 옵션
    center: myLatlng,
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  // 구글 맵 생성
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var content = "GWNU Computer Science";
  var contentString = '<div style="width:100px;height:50px;">GWNU Computer Science</div>';		// 말풍선 내용

  var infowindow = new google.maps.InfoWindow({
    content: contentString,
    size: new google.maps.Size(200,100)
  });

  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
      draggable:true,			// 마커 드래그 가능
    title: 'GWNU Computer Science'	// 마커 : 도움말 풍선(마우스 오버 시)
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map, marker);

    if (marker.getAnimation() != null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  });

  marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);



function query(){
      var ret = confirm("입학홈페이지로 이동하시겠습니까?");
      return ret;
}

function hideMenu(){
      alert("우클릭 금지");
      return false;
}
document.oncontextmenu=hideMenu;
