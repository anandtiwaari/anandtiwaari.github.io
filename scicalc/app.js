let screen = document.getElementById('screen')
        function myclick(a) {
            screen.value += a;
        }
        function equal() {
            screen.value = eval(screen.value)
        }
        function c() {
            screen.value = "";
        }
        function del() {
            let prevalue = screen.value;
            screen.value = prevalue.substr(0, prevalue.length - 1);
        }
        function sin() {
            screen.value = Math.sin(screen.value)
        }
        function cos() {
            screen.value = Math.cos(screen.value)
        }
        function tan() {
            screen.value = Math.tan(screen.value)
        }
        function square() {
            screen.value = Math.pow(screen.value, 2)
        }
        function radic() {
            screen.value = Math.pow(screen.value, 1 / 2)
        }