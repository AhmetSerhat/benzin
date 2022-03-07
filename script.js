document.getElementById("listeyillar").addEventListener("change",hesapla);

let i;
function yillar(){
    let tarih=new Date();
    let guncelyil=tarih.getFullYear();


    for(i=guncelyil;i>=2000;i--){
        let yil=document.createElement("option");
        document.getElementById("listeyillar").appendChild(yil);
        yil.innerHTML=i;
  }
}

function hesapla(){

    let liste=document.getElementById("listeyillar");
    let secilenyilfiyat=liste.options[liste.selectedindex].value;

    let sonuc=50/secilenyilfiyat;

    document.getElementById("sonuc").innerHTML="seçtiğiniz yılda 50 tl ile "+sonuc.toFixed(1)+ "LT benzin alınabiliyordu.";
     }