

class Heritage {
    constructor(id, name,country,describe,image){
        this.id = id;
        this.name = name;
        this.country = country;
        this.describe = describe;
        this.image = image;
    }
}


const heritage1 = new Heritage("1","パルテノン神殿","ギリシャ","パルテノン神殿は、古代ギリシア時代にアテナイのアクロポリスの上に建設された、アテナイの守護神であるギリシア神話の女神アテーナーを祀る神殿である。","https://images.unsplash.com/photo-1597697154745-2f5340874c11?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80");
const heritage2 = new Heritage("2","ストーンヘンジ","イギリス","ストーンヘンジは、ロンドンから西に約200kmのグレートブリテン及び北アイルランド連合王国南部・ソールズベリーから北西に13km程に位置する環状列石のこと。","https://images.unsplash.com/photo-1599833975787-5c143f373c30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1856&q=80");
const heritage3 = new Heritage("3","コロッセオ","イタリア","コロッセオは、ローマ帝政期の西暦80年に、ウェスパシアヌス帝とティトゥス帝によって造られた円形闘技場。","https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1996&q=80");
const heritage4 = new Heritage("4","マチュピチュ","ペルー","マチュ・ピチュは、15世紀のインカ帝国の遺跡で、アンデス山麓に属するペルーのウルバンバ谷に沿った山の尾根（標高2,430m）にある。","https://images.unsplash.com/photo-1526392060635-9d6019884377?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80");
const heritage5 = new Heritage("5","モンサンミシェル","フランス","モンサンミシェルは、フランス西海岸、サン・マロ湾上に浮かぶ小島、及びその上にそびえる修道院である。","https://images.unsplash.com/photo-1596436831831-87dd84a69101?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1771&q=80");
const heritage6 = new Heritage("6","サクラダファミリア","スペイン","サグラダ・ファミリアは、日本語に訳すると聖家族贖罪教会という正式名称を持つ、スペインのバルセロナにあるカトリック教会のバシリカである。","https://images.unsplash.com/photo-1583779457094-ab6f77f7bf57?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1932&q=80");
const heritage7 = new Heritage("7","ドゥブロヴニク","クロアチア","ドゥブロヴニクは、クロアチア、アドリア海沿岸のダルマチア最南部に位置する都市及び基礎自治体で、ドゥブロヴニク＝ネレトヴァ郡の郡都である。","https://images.unsplash.com/photo-1555990793-da11153b2473?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1771&q=80");
const heritage8 = new Heritage("8","万里の長城","中国","万里の長城は、中華人民共和国に存在する城壁の遺跡である。","https://images.unsplash.com/photo-1608037521277-154cd1b89191?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80");


// LIST

heritageList = [heritage1,heritage2,heritage3,heritage4,heritage5,heritage6,heritage7,heritage8]

buttonIdList = ["1","2","3","4","5","6","7","8","9","0"];

// getDocument button
const buttonList = document.getElementById("button-list");
const numberView = document.getElementById("inputNum");
const heritageViewbar = document.getElementById("heritageViewber")
const deleteButton = document.getElementById("delete")
const oneCharDeleteButton = document.getElementById("oneCharDelete")
const submitButton = document.getElementById("submit")

// getDocument information
const slider = document.getElementById("slider")
const mainBox = document.getElementById("main");
const extraBox = document.getElementById("extra");
const mainImg = document.getElementById("main-img");
const extraImg = document.getElementById("extra-img");

const heritageName = document.getElementById("heritage-name");
const countryName = document.getElementById("country-name");
const explanation = document.getElementById("explanation");


// function
function buttonInput(number){
    if(numberView.value.length < 2){
        numberView.value += number
    }else{
        alert("最大2文字までです。")
        numberView.value = ""
    }
    
}

function heritageView(){
    value = numberView.value
    if(value === ""){
        numberView.value = ""
        heritageViewbar.value = ""
        alert("その番号は登録されてません。1から"+ heritageList.length + "の中で選んでください。")
    }else{
        if(value <= heritageList.length){
            let currentObj = getInstance(value)
            heritageViewbar.value = currentObj.name 
        }else{
            numberView.value = ""
            heritageViewbar.value = ""
            alert("その番号は登録されてません。1から"+ heritageList.length + "の中で選んでください。") 
        }
         
    }
    
}

function getInstance(value){
    for(let insta of heritageList){
        if(insta.id === value){
            return insta
        }
    }
}

// setAttribute
submitButton.setAttribute("submit-number","0")
extraImg.setAttribute("next-image","https://thumbs.dreamstime.com/b/happy-child-girl-goes-to-summer-travel-trip-car-happy-child-girl-goes-to-summer-travel-trip-car-147571409.jpg")


// main
for(let buttonId of buttonIdList){
    
    let button = document.createElement("button");
    button.classList.add("btn","btn-outline-dark","col-3","m-2")
    button.setAttribute("id","button-"+ buttonId);
    button.innerHTML = buttonId;

    buttonList.append(button);

    button.addEventListener("click",function(){
        buttonInput(button.innerHTML)
        heritageView()
    })

}

oneCharDeleteButton.addEventListener("click",function(){
    let value = numberView.value;
    numberView.value = value.slice("0","-1")
    if (value.length === 1){
        heritageViewbar.value = "";
    }
    
})

deleteButton.addEventListener("click",function(){
    numberView.value = ""
    heritageViewbar.value = ""
})

submitButton.addEventListener("click",function(){
    attribute = submitButton.getAttribute("submit-number")
    value = numberView.value

    
    if(0 < value && value <= heritageList.length ){
        changeInformation(value,attribute)
        numberView.value = ""
        heritageViewbar.value = ""

        
    }else{
        alert("その番号は登録されてません。1から"+ heritageList.length + "の中で選んでください。")
        numberView.value = ""
        heritageViewbar.value = ""
    }

    submitButton.setAttribute("submit-number",value)
    

})


function changeInformation(value,attribute){

    let intValue = parseInt(value)
    let heritageObj = getInstance(value);
    let nextImage = extraImg.getAttribute("next-image");

    console.log(heritageObj.image)

    let main = "expand-animation";
    let extra = "deplete-animation";
    
    slider.innerHTML = ""
    if(attribute > intValue){
        let rightMove = `
        <div id="main" class="d-flex justify-content-center align-content-center ${main} full-width">
            <img id="main-img" src="${heritageObj.image}" class="img-fit" alt>
        </div>
        <div id="extra" class="d-flex justify-content-center full-width ${extra}">
            <img id="extra-img" src="${nextImage}" class="img-fit" alt>
        </div>
        `
        slider.innerHTML = rightMove;
    }else{
        let leftMove = `
        <div id="main" class="d-flex justify-content-center align-content-center ${extra} full-width">
            <img id="main-img" src="${nextImage}" class="img-fit" alt>
        </div>
        <div id="extra" class="d-flex justify-content-center full-width ${main}">
            <img id="extra-img" src="${heritageObj.image}" class="img-fit" alt>
        </div>
        
        `
        slider.innerHTML = leftMove;
    }

    heritageName.innerHTML = heritageObj.name;
    countryName.innerHTML = "-" + heritageObj.country + "-";
    explanation.innerHTML = heritageObj.describe;

    extraImg.setAttribute("next-image",heritageObj.image)

}