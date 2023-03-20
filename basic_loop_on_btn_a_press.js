let BtnA = false
let BtnB = false
let start = true
function run(hi: string) {
    basic.clearScreen()
    for (let letter of hi) {
        basic.showString(letter + "", 100)
    }
}

function str2(a: number) {
    a = a * 1000
    return "" + ("" + ("" + ("" + Math.floor(a) / 1000)))
}

while (true) {
    if (input.buttonIsPressed(Button.A)) {
        led.plot(4, 4)
        pause(60)
    }

    if (input.buttonIsPressed(Button.B)) {
        led.plot(4, 3)
        pause(60)
    }

    if (led.point(4, 4)) {
        BtnA = true
    }

    if (led.point(4, 3)) {
        BtnB = true
    }

    //  code start
    if (start) {
        start = false
        function main_func(): string {
            return ""
        }

        run(main_func())
    }

    if (BtnA) {
        BtnA = false
        function btna_func(): any {
            
            let e = '';
            let a = 0;
            while (a < 10)
            {
                a = a + 1;
                e = e + str2(a) + " "; // str2 converts numbers into strings
            }

            return e + " ";

        }

        run(btna_func())
    }

    if (BtnB) {
        BtnB = false
        function btnb_func(): string {
            return ""
        }

        run(btnb_func())
    }

}
