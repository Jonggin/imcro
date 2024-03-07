const express = require('express');
const session = require('express-session');
const app = express();
const bodyParser = require('body-parser');
const xlsx = require('xlsx'); 
const EXCEL_FILE_PATH = __dirname + '/Laptop.xlsx';

const workbook = xlsx.readFile(EXCEL_FILE_PATH);
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const data = xlsx.utils.sheet_to_json(sheet);
// console.log(data)

app.use(bodyParser.json()); // JSON 형식의 데이터를 처리
app.use(bodyParser.urlencoded({ extended: true })); // URL-encoded 형식의 데이터를 처리

// EJS를 뷰 엔진으로 설정
app.set('view engine', 'ejs');

// views 디렉토리에 있는 파일을 뷰로 사용
app.set('views', __dirname + '/views');

// 정적 파일 제공을 위한 디렉토리 설정
app.use(express.static('public'));

// 세션 설정
app.use(session({
  secret: 'your_secret_key', // 세션을 암호화하기 위한 비밀 키
  resave: false, // 세션이 변경되지 않았다면 다시 저장하지 않음
  saveUninitialized: false, // 초기화되지 않은 세션을 저장하지 않음
}));

// 루트 경로에 대한 라우트 설정
app.get('/', (req, res) => {
  // index.ejs 파일 렌더링
  res.render('index');
});

app.get('/form1.ejs', (req, res) => {
  // index.ejs 파일 렌더링
  res.render('form1');
});

app.get('/form2.ejs', (req, res) => {
  // index.ejs 파일 렌더링
  res.render('form2');
});

app.get('/form3.ejs', (req, res) => {
  // index.ejs 파일 렌더링
  res.render('form3');
});

app.get('/form4.ejs', (req, res) => {
  // index.ejs 파일 렌더링
  res.render('form4');
});

app.get('/form5.ejs', (req, res) => {
  // index.ejs 파일 렌더링
  res.render('form5');
});

app.get('/form6.ejs', (req, res) => {
  // index.ejs 파일 렌더링
  res.render('form6');
});

app.get('/form7.ejs', (req, res) => {
  // index.ejs 파일 렌더링
  res.render('form7');
});

app.get('/result.ejs', (req, res) => { //아직 안씀
  res.render('result');
});


app.post('/weight', (req, res) => {
  const weight = req.body.weight; // 사용자 응답 가져오기
  const questionNumber = "무게";
  // 세션에 저장된 응답 확인 및 업데이트
  if (!req.session.responses) {
      req.session.responses = {};
  }
  
  // 수정된 응답을 세션에 저장
  req.session.responses[questionNumber] = weight;
  console.log(JSON.stringify(req.session.responses)) //세션에 저장이 잘 되나 확인?
  // 다음 질문 페이지로 리다이렉트
  res.redirect('/form2.ejs');
});

app.post('/purpose', (req, res) => {
  const websurfing = req.body.websurfing;
  const office = req.body.office;
  const casualgame = req.body.casualgame;
  const engineer = req.body.engineer;
  const photo = req.body.photo;
  const highgame = req.body.highgame;
  const programming = req.body.programming;
  const video = req.body.video; // 사용자 응답 가져오기

  // 세션에 저장된 응답 확인 및 업데이트
  if (!req.session.responses) {
      req.session.responses = {};
  }
  
  // 수정된 응답을 세션에 저장
  req.session.responses["웹서핑/학습용"] = websurfing;
  req.session.responses["사무용"] = office;
  req.session.responses["캐주얼게임"] = casualgame;
  req.session.responses["공학/설계"] = engineer;
  req.session.responses["사진편집/그래픽"] = photo;
  req.session.responses["고사양게임"] = highgame;
  req.session.responses["프로그래밍"] = programming
  req.session.responses["영상편집"] = video;
  console.log(JSON.stringify(req.session.responses))
    res.redirect('form4.ejs');
});


app.post('/game', (req, res) => {
  const lol = req.body.lol;
  const fc = req.body.fc;
  const balo = req.body.bal;
  const sudden = req.body.sudden;
  const battle = req.body.battle;
  const lost = req.body.lost;
  const over = req.body.highgame;
  const maple = req.body.highgame;
  const star = req.body.star;
  const dunpa = req.body.dunpa;
  const palworld = req.body.palworld;
// 사용자 응답 가져오기


  // 세션에 저장된 응답 확인 및 업데이트
  if (!req.session.responses) {
      req.session.responses = {};
  }
  
  // 수정된 응답을 세션에 저장
  req.session.responses["롤"] = lol;
  req.session.responses["FC온라인"] = fc;
  req.session.responses["발로란트"] = balo;
  req.session.responses["서든어택"] = sudden;
  req.session.responses["배틀그라운드"] = battle;
  req.session.responses["로스트아크"] = lost;
  req.session.responses["오버워치"] = over;
  req.session.responses["메이플"] = maple;
  req.session.responses["스타크래프트"] = star;
  req.session.responses["던파"] = dunpa;
  req.session.responses["팔월드"] = palworld;
  //세션에 저장이 잘 되나 확인?
  console.log(JSON.stringify(req.session.responses)) 
  // 다음 질문 페이지로 리다이렉트
  res.redirect('form4.ejs');
});


app.post('/feature', (req, res) => {
  const feature = req.body.feature; // 사용자 응답 가져오기
  const questionNumber = "주요특징";

  // 세션에 저장된 응답 확인 및 업데이트
  if (!req.session.responses) {
      req.session.responses = {};
  }
  
  // 수정된 응답을 세션에 저장
  req.session.responses[questionNumber] = feature;
  console.log(JSON.stringify(req.session.responses)) //세션에 저장이 잘 되나 확인?
  // 다음 질문 페이지로 리다이렉트
  // 성공 응답 보내기
  res.status(200).send({ message: "요청이 성공적으로 처리되었습니다." });
});;

app.post('/os', (req, res) => {
  const os = req.body.os; // 사용자 응답 가져오기
  const questionNumber = "OS";

  // 세션에 저장된 응답 확인 및 업데이트
  if (!req.session.responses) {
      req.session.responses = {};
  }
  
  // 수정된 응답을 세션에 저장
  req.session.responses[questionNumber] = os;
  console.log(JSON.stringify(req.session.responses)) //세션에 저장이 잘 되나 확인?
  // 다음 질문 페이지로 리다이렉트
  res.redirect('form5.ejs');
});


app.post('/size', (req, res) => {
  const size = req.body.size; // 사용자 응답 가져오기
  const questionNumber = "사이즈";

  // 세션에 저장된 응답 확인 및 업데이트
  if (!req.session.responses) {
      req.session.responses = {};
  }
  
  // 수정된 응답을 세션에 저장
  req.session.responses[questionNumber] = size;
  console.log(JSON.stringify(req.session.responses)) //세션에 저장이 잘 되나 확인?
  // 다음 질문 페이지로 리다이렉트
  res.redirect('form7.ejs');
});


app.post('/price', (req, res) => {
  const price = req.body.price; // 사용자 응답 가져오기
  const questionNumber = "가격";

  // 세션에 저장된 응답 확인 및 업데이트
  if (!req.session.responses) {
      req.session.responses = {};
  }
  
  // 수정된 응답을 세션에 저장
  req.session.responses[questionNumber] = price;
  console.log(JSON.stringify(req.session.responses)) //세션에 저장이 잘 되나 확인?
  // 결과 페이지로 리다이렉트
  res.status(200).send({ message: "요청이 성공적으로 처리되었습니다." });
});

//const choosedweight = req.session.responses["무게"];
function WeightFiltering(sessionResponses) {
  //console.log("안녕")
  switch (sessionResponses['무게']) {
    case "light":
      // "light" 선택 시, 1.5kg 이하의 노트북 필터링
      return data.filter(data => data['무게'] <= 1.5);
    case "not-too-heavy":
      // "not-too-heavy" 선택 시, 2kg 이하의 노트북 필터링
      return data.filter(data => data['무게'] <= 2);
    case "heavy-ok":
      // "heavy-ok" 선택 시, 모든 노트북을 포함
      return data;
    default:
      // 사용자의 선택이 없거나 인식할 수 없는 값인 경우, 모든 노트북을 반환
      return data;
  }
}

function purposeFiltering(data, responses) {
  // 필터링에 사용할 키 값만 명시
  const validKeys = ["웹서핑/학습용", "사무용", "캐주얼게임", "공학/설계", "사진편집/그래픽", "고사양게임" ,"프로그래밍","영상편집"];
  const filtereddata=data.filter(laptop => {
    // validKeys 배열에 있는 키에 대해서만 필터링을 수행
    return validKeys.every(key => {
      const userRate = responses[key] || "0"; // 문자열 "0"으로 기본값 설정
      const numericUserRate = parseInt(userRate, 10); // 사용자 등급을 숫자로 변환
      const laptopRate = parseInt(laptop[key], 10); // 노트북의 해당 기능 등급을 숫자로 변환
      return laptopRate >= numericUserRate; // 노트북이 사용자의 요구 등급을 만족하는지 확인
    });
  });
  return filtereddata
}

function gameFiltering(data, responses) {
  // 필터링에 사용할 키 값만 명시
  const validKeys = ["롤", "FC온라인", "발로란트", "서든어택", "배틀그라운드", "로스트아크", "오버워치","메이플","스타크래프트","던파","팔월드"];

  const filtereddata = data.filter(laptop => {
    // validKeys 배열에 있는 키에 대해서만 필터링을 수행
    return validKeys.every(key => {
      const userRate = responses[key] || "0"; // 문자열 "0"으로 기본값 설정
      const numericUserRate = parseInt(userRate, 10); // 사용자 등급을 숫자로 변환
      const laptopRate = parseInt(laptop[key], 10); // 노트북의 해당 게임 등급을 숫자로 변환
      return laptopRate >= numericUserRate; // 노트북이 사용자의 요구 등급을 만족하는지 확인
    });
  });
  return filtereddata
}

function featuresFilteiring(data, sessionResponses) {  // 사용자가 선택한 특징
  const selectedFeatures = sessionResponses["주요특징"];

  // 선택된 특징이 모두 1인 행만 필터링
  const filteredData = data.filter(row => 
      selectedFeatures.every(feature => row[feature] === 1)
  );

  return filteredData;
}

// 사용자 응답을 기반으로 데이터베이스 필터링하는 함수
function OSFiltering(data,userResponse) {
  // 사용자가 선택한 OS에 따라 데이터 필터링
  const filteredData = data.filter(laptop => userResponse.OS.includes(laptop.OS));

  // 필터링된 데이터 반환
  return filteredData;
}

function sizeFiltering(data,userResponse) {
  // 사용자가 선택한 OS에 따라 데이터 필터링
  const filteredData = data.filter(laptop => userResponse.사이즈.includes(laptop.사이즈));

  // 필터링된 데이터 반환
  return filteredData;
}

function priceFiltering(data, userResponse) {
  // 사용자가 선택한 가격 중 최댓값 구하기
  const maxPrice = Math.max(...userResponse.가격.map(price => parseInt(price.replace(/,/g, ''), 10)));

  // 최댓값 이하의 가격을 가진 노트북 필터링
  const filteredData = data.filter(laptop => {
    // 가격 정보를 문자열로 변환
    const priceStr = typeof laptop.가격 === 'string' ? laptop.가격 : laptop.가격.toString();
    // 변환된 문자열에서 콤마 제거 후 숫자로 변환하여 최댓값과 비교
    return parseInt(priceStr.replace(/,/g, ''), 10) <= maxPrice;
  });
  return filteredData;
}

function finalfiltering(userResponse) {
  const filteredbyweight = WeightFiltering(userResponse) //무게로 필터링
  console.log(filteredbyweight)
  const filteredbypurpose = purposeFiltering(filteredbyweight,userResponse) //1번 조건을 거친 채 목적에 따라 필터링
  console.log(filteredbypurpose)
  const filteredbygame = gameFiltering(filteredbypurpose, userResponse)
  console.log(filteredbygame)
  const filteredbyfeature = featuresFilteiring(filteredbygame, userResponse)
  console.log(filteredbyfeature)
  const filteredbyOS = OSFiltering(filteredbyfeature, userResponse)
  console.log(filteredbyOS)
  const filteredbysize = sizeFiltering(filteredbyOS, userResponse)
  console.log(filteredbysize)
  const filteredbyprice = priceFiltering(filteredbysize,userResponse)
  console.log(filteredbyprice)
  const finalresult = filteredbyprice
    // 각 항목의 '링크'를 사용하여 이미지 URL을 가져오고, 'image' 속성에 추가
  return finalresult; // 이미지 정보가 추가된 최종 결과 반환
} 

app.get('/finalresult', (req, res) => { //아직 안씀
  // const price = req.body.price; // 사용자 응답 가져오기
  // const questionNumber = "가격";

  // // 세션에 저장된 응답 확인 및 업데이트
  // if (!req.session.responses) {
  // }
  
  // // 수정된 응답을 세션에 저장
  // req.session.responses[questionNumber] = price;
  // console.log(JSON.stringify(req.session.responses)) //세션에 저장이 잘 되나 확인?
  console.log(JSON.stringify(finalfiltering(req.session.responses)))
  res.json(finalfiltering(req.session.responses));
});


// app.post('/result', (req, res) => {
//   console.log("result 실행 완료")

//   if (!req.session.responses) {
//     return console.log('응답이 세션에 저장되어 있지 않습니다.');
//     //return res.status(400).send('응답이 세션에 저장되어 있지 않습니다.');
//   }

//   const recommendedLaptops = purposefiltering(weightfiltering(req.session.responses["무게"]));
//   res.json(recommendedLaptops);
//   console.log(recommendedLaptops)
// });

// 서버 시작
app.listen(8080, () => {
  console.log('Server is running on port 8080');
});

