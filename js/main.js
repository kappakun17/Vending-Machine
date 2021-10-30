

class Heritage {
    constructor(id, name,country,describe,image){
        self.id = id;
        self.name = name;
        self.country = country;
        self.describe = describe;
        self.image = image;
    }
}


const heritage1 = new Heritage("1","パルテノン神殿","ギリシャ","パルテノン神殿は、古代ギリシア時代にアテナイのアクロポリスの上に建設された、アテナイの守護神であるギリシア神話の女神アテーナーを祀る神殿である。","https://unsplash.com/photos/4Mlf3kJ4lkE");
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
const deleteButton = document.getElementById("delete")
const oneCharDeleteButton = document.getElementById("oneCharDelete")
const submitButton = document.getElementById("submit")

// getDocument image
const mainBox = document.getElementById("main");
const 

// function
function buttonInput(number){
    if(numberView.value.length < 2){
        numberView.value += number
    }else{
        alert("最大2文字までです。")
    }
    
}

// setAttribute
submitButton.setAttribute("submit-number","0")


// main
for(let buttonId of buttonIdList){
    
    let button = document.createElement("button");
    button.classList.add("btn","btn-outline-dark","col-3","m-2")
    button.setAttribute("id","button-"+ buttonId);
    button.innerHTML = buttonId;

    buttonList.append(button);

    button.addEventListener("click",function(){
        buttonInput(button.innerHTML)
    })

}

oneCharDeleteButton.addEventListener("click",function(){
    value = numberView.value;
    numberView.value = value.slice("0","-1")
})

deleteButton.addEventListener("click",function(){
    numberView.value = ""
})

submitButton.addEventListener("click",function(){
    attribute = submitButton.getAttribute("submit-number")
    value = numberView.value
    
    if(value =< heritageList.length){
        changeImg(value,attribute)
        
    }else{
        alert("その番号は登録されてません。０から"+ heritageList.length.toString + "の中で選んでください。")
    }

    submitButton.setAttribute("submit-number",value)

})


function changeImg(value,attribute){
    if(attribute =< value){
        
    }
}