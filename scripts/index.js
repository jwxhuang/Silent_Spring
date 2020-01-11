var animations = ['f1','f2','f3','f4','f5','f7','f8'];
    var i, len = animations.length;
    for(i = 0; i < len; i += 1) {
        var anim;
        var elem = document.getElementById(animations[i])
        var animData = {
            container: elem,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            rendererSettings: {
                progressiveLoad:true,
                preserveAspectRatio:'xMidYMid meet'
            },
            path: '/lottie/data_/'+animations[i]+'.json'
        };
        anim = lottie.loadAnimation(animData);
        anim.setSubframe(false);
    }