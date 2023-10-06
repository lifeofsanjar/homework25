//Uchburchak perimetrini topish masalasi

let P;
const a = parseInt( prompt ( "Uchburchakning 1-tomonini kiriting: " ) );
const b = parseInt( prompt ( "Uchburchakning 2-tomonini kiriting: " ) );
const c = parseInt( prompt ( "Uchburchakning 3-tomonini kiriting: " ) );
if ( a+b<c ) 
{
    alert("Bunday uchburchak mavjud emas!!!")
}
else if( a+c<b )
{
    alert("Bunday uchburchak mavjud emas!!!")
}
else if( b+c<a )
{
    alert("Bunday uchburchak mavjud emas!!!")
}
else if( a+c==b )
{
    alert("Bunday uchburchak mavjud emas!!!")
}
else if( b+c==a )
{
    alert("Bunday uchburchak mavjud emas!!!")
}
else if ( a+b==c )
{
    alert("Bunday uchburchak mavjud emas!!!")
} 
else 
{
    P=a+b+c;
    alert( "Uchburchak perimetri: " + P );
}

//N1

// let P;
// const a = parseInt( prompt ( "Kvadratning tomonini kiriting: " ) );
// P = 4*a;
// alert("Kvadratning perimetri : " + P)

//N2

// let S;
// const a = parseInt( prompt ( "Kvadratning tomonini kiriting: " ) );
// S = a*a;
// alert("Kvadratning yuzasi : " + S)

//N3

// let P,S;
// const a = parseInt( prompt ( "To'rtburchakning 1-tomonini kiriting: " ) );
// const b = parseInt( prompt ( "To'rtburchakning 2-tomonini kiriting: " ) );
// S = a*b;
// P = 2*(a+b);
// alert("To'rtburchakning yuzasi : " + S + "  To'rtburchakning permetri : " + P )

//N4

// const pi=3.14;
// let L;
// const d = parseInt( prompt ( "Aylana diametrini kiriting: " ) );
// L = pi*d;
// alert( "Aylana uzunligi : " + L)

//N5

// let  V,S
// const a = parseInt( prompt ( "Kubning tomonini kiriting: " ) );
// V=a*a*a;
// S=6*a*a;
// alert("Kubning yuzasi : " + S + "  Kubning hajmi : " + V )

//N23

// let time , h , m , s;
// time =parseInt( prompt ( "Kun boshidan nechchi sekund o'tdi " ) )
// h = Math.floor(time/3600)
// m = Math.floor((time-(h*3600))/60)
// s = time - (h*3600) - (m*60);
// alert(h+"h "+m+"m "+s+"s")
