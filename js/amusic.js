const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
	  autoplay: false, //关闭自动播放
    audio: [
	{
        name: 'Succession',
        artist: '塞壬唱片-MSR / 北村友香',
        url: 'http://music.163.com/song/media/outer/url?id=2151081433.mp3',
        cover: 'http://p2.music.126.net/gQa7cvwUMrN3AbfpLJQVwQ==/109951169546079916.jpg?param=130y130',
    }, 
	]
});
