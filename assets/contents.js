var jobs = [
  ['도둑', '수호자', '담당일진', '약탈자', '방문판매원', '파괴자', '테러범', '와(과)교제사실을들킨', '뺏어먹는', '관찰자', '밑장빼기9단'],
  ['카사노바', '소리없는방귀빌런', '절대강자', '노숙자', '진상', '술고래', '터줏대감', '관짝춤머신', '화장실문지기']
]

var locations = [
  ['노인정', '사우나', '성인용품점', '러브호텔', '피시방', '국어학원', '수학학원', '영어학원', '과학학원', '기숙학원', '기숙사', '독서실', '대형마트', '스터디카페', '노약자석', '임산부석', '장애인석', '대형마트시식코너', '경찰서', '대중목욕탕', '무료급식소', '초등학교', '중학교', '고등학교', '편의점', '학원가', '세탁소', '풋살장', '미용실', '찜질방', '동사무소', '전통시장', '태권도장', '놀이터', '헬스장', '할매순댓국밥', '버스정류장', '삼성프라자', '국회의사당', '흡연실', '아파트관리사무소', '생활관', '서점', '도서관', '급식실', '휴대폰대리점', '주유소', '공원', '에버랜드', '롯데월드', '지하철', '지하철역', '시내버스', '고속버스'],
  ['폐지줍는할머니', '포식자', '수능시험장', '결국사람', '펩시', '유모차레이스', '엄마가준비한식사', '어린이보호구역', '노인에게서슴지않고', 'Pornhub', '어린이탐정단', '냉탕에오줌싸서', '미래통합당', '스키장상급자코스', '장례식장', '고구려대학교', '고아원', '수능갤러리', '공사장', '애견카페', '군부대', '훈련소', '납골당', '논', '밭', '롯데마트', '시공의폭풍', '신천지', '웹툰미리보기사이트']
]
/* 목록이 길어져서 분리
작성규칙:
인덱스 0 : 장소
인덱스 1 : 특별한 위치 변수 정의용(장소가 아님)

* 인덱스 0 마지막 콤마(,) 잃어버리지 않게 조심
*/

var specificLocations = {
  '어린이보호구역': ['스피드레이서', true],
  '장례식장' : ['육계장미식가', true],
  '수능갤러리' : ['삼수생', true],
  '공사장' : ['안전모도둑', true],
  '노인에게서슴지않고' : ['돌을던지는', false],
  'Pornhub' : ['대주주', true],
  '웹툰미리보기사이트' : ['업로더', true],
  '애견카페' : ['개고기스카우터', true],
  '어린이탐정단' : ['돋보기도둑', false],
  '냉탕에오줌싸서' : ['온탕으로바꾸는', false],
  '미래통합당' : ['열성지지자', true],
  '고아원' : ['에서아빠힘내세요를부르는', true],
  '군부대' : ['전화선절단범', true],
  '훈련소' : ['에서탄피하나잃어버린', false],
  '납골당' : ['유골항아리도둑', true],
  '고구려대학교' : ['신입생', false],
  '논' : ['에불지르는', false],
  '밭' : ['에불지르는', false],
  '수능시험장' : ['에서소리지르는', false],
  '포식자' : ['정글유미원챔', false],
  '별수호자' : ['', false], 
  '사랑의추적자' : ['', false],
  '수영장파티' : ['', false],
  '겨울동화' : ['', false],
  '펩시' : ['성애자', true],
  '유모차레이스' : ['4관왕', true],
  '엄마가준비한식사' : ['먹다던지는', false],
  '롯데마트' : ['쇼핑카트뺑소니현행범', true],
  '신천지' : ['추수꾼', true],
  '스키장상급자코스' : ['앞구르기장인', true],
  '폐지줍는할머니' : ['폐지뺏어서똥닦는', false],
  '결국사람' : ['이름이되지못한', false],
  '시공의폭풍' : ['속으로빨려들어간', false]
}

var objects = [
  '수건', '때밀이수건', '할머니때밀이수건', '흑돌', '백돌', '러브젤', '노트', '교재', '연필심', '샤프심', '휴대폰충전기', '마우스', '지우개', '테이저건', '콘돔', '분필', '젓가락', '잔디', '바리깡', '틀니', '잼민이휴대폰', '할아버지지팡이', '종이컵', '비타민', '리코더', '줄넘기', '프로틴', '단백질', '다데기'
]

var exampleNames = [
  '엄준식', '홍길동', '강철수', '박종현', '문성수', '유현재', '고강건', '안주현', '김민식'
]
// '정지웅', '노강민'

/* 인구순 나열 (동탄 제외) */
var exampleLocations = [
  '동탄', '서울', '부산', '인천', '대구', '대전', '광주', '울산', '제주', '수원', '고양', '용인', '창원', '성남', '청주', '부천', '화성', '남양주', '전주', '천안', '안산', '안양'
]
