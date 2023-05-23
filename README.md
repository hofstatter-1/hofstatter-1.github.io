# hofstatter-1.github.io
<!DOCTYPE html>
<html>
<head>
    <title>Bouncing CP3</title>
    <style>
        #logo {
            position: absolute;
            top: 0;
            left: 0;
            width: 150px;
            height: 200px;
            background-image: url('IMG_5059.jpg');
            background-size: cover;
            background-repeat: no-repeat;
            background-color: black;
        }
    </style>
</head>
<body>
    <div id="logo"></div>

    <script>
        var logo = document.getElementById('logo');
        var x = 0; // initial horizontal position
        var y = 0; // initial vertical position
        var dx = 5; // horizontal velocity
        var dy = 5; // vertical velocity

        function animate() {
            var containerWidth = window.innerWidth;
            var containerHeight = window.innerHeight;
            var logoWidth = logo.offsetWidth;
            var logoHeight = logo.offsetHeight;

            x += dx;
            y += dy;

            if (x + logoWidth >= containerWidth || x <= 0) {
                dx = -dx; // reverse horizontal direction
            }

            if (y + logoHeight >= containerHeight || y <= 0) {
                dy = -dy; // reverse vertical direction
            }

            logo.style.left = x + 'px';
            logo.style.top = y + 'px';

            requestAnimationFrame(animate);
        }

        animate();
    </script>
</body>
</html>
