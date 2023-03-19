BtnA = False
BtnB = False
start = True
def run(hi: str):
    basic.clear_screen()
    for letter in hi:
        basic.show_string(letter + "", 100)
def str2(a: number):
    a = a * 1000
    return "" + ("" + ("" + str(Math.floor(a) / 1000)))
while True:
    if input.button_is_pressed(Button.A):
        led.plot(4, 4)
        pause(60)
    if input.button_is_pressed(Button.B):
        led.plot(4, 3)
        pause(60)
    if led.point(4, 4):
        BtnA = True
    if led.point(4, 3):
        BtnB = True


    # code start

    if start:
        start = False;

        def main_func():
            return "Hello, world! ";
        
        run(main_func())

    if BtnA:
        BtnA = False;

        def btna_func():
            return "btn a pressed! ";
        
        run(btna_func())
    
    if BtnB:
        BtnB = False;

        def btnb_func():
            return "btn b pressed! ";
        
        run(btnb_func())
