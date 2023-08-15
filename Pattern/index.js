function pattern1 () {
    for(let i = 1; i<=4; i++){
        for(let j = i; j<=4; j++){
        document.write(j);
        }   
        document.write('<br>')
    }

}
pattern1();

document.write('<br>')

function pattern2 () {
    for(let i=4; i>=1; i--){
        for(let j=1; j<=i; j++){
            document.write(j)
        }
        document.write('<br>')
    }
}
pattern2();
document.write('<br>')

function pattern3 () {
    for(let i=3; i>0; i--){
        for(let j=i; j>0; j--){
            document.write(j);
        }
        document.write('<br>');
       
    }
}
pattern3();
document.write('<br>')

function pattern4 () {
    for(let i=1; i<=3; i++){
        for(let j=1; j<=3; j++){
            document.write(i)
        }
        document.write('<br>')
    }
}
pattern4();
document.write('<br>')

function pattern5 () {
    let x=1;
    for(let i=3; i>=1; i--){
        for(let j=1; j<=i; j++){
            document.write(x)
        }
        document.write('<br>');
        x++
    }
}
pattern5();
document.write('<br>')

function pattern6 () {
    let x=1;
    for(let i=3; i>=1; i--){
        for(let j=1; j<=i; j++){
            document.write(i)
        }
        document.write('<br>');
        x++
    }
}
pattern6();

document.write('<br>')

function pattern7 () {
    let x=3;
    for(let i=1; i<=3; i++){
        for(let j=1; j<=i; j++){
            document.write(x)
        }
        document.write('<br>');
        x--;
    }
}
pattern7();

document.write('<br>')

function pattern8 () {
    let yes = 16;
    let no = 4;
    for(let i=1; i<=5; i++){
        for(let j=1; j<=i; j++){
            document.write("*");
        }
        for(let y=1; y<=yes; y++){
            document.write('&nbsp;')
        }
        for(let j=1; j<=i; j++){
            document.write("*")
        }
        document.write("<br>")
        yes=yes-4
    }
    for(let i=4; i>=1; i--){
        for(let j=1;j<=i;j++){
            document.write("*")
        }
        for(let y=1; y<=no; y++){
            document.write('&nbsp;')
        }
        for(let j=1;j<=i;j++){
            document.write("*")
        }
        document.write('<br>');
        no = no+4
    }
}
pattern8();