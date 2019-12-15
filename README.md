# Get Weather API

## Weather API

[https://home.openweathermap.org/](https://home.openweathermap.org/)에서 날씨 정보 가져와서 구현

[https://namjackson.tistory.com/27](https://namjackson.tistory.com/27) 날씨 가져오는 법 참고

## React Life Cycle

리액트 라이프사이클은 여러가지가 있는데 사용하는 몇 가지는.

- componentDidMount() : 화면에 그려지고나서 호출
- componentDidUpdate() : 컴포넌트가 갱신될 때 마다 호출
- componentWillMount() : 화면에 그려지기 전 호출
- componentWillReceiveProps() : Props 데이터가 변경되거나 삽입되었을 때 호출
- componentWillUpdate() : 컴포넌트 갱신되기 전 호출

호출 순서

componentWillMount -> componentWillUpdate -> Render() -> componentDidMount -> componentDidUpdate

## Axios 모듈

axios.post() // Create
axios.put() // Update
axios.delete() // Delete

### .then()

.then은 ES6에 적용된 비동기 처리를 위한 'Promise' 문법이다.
ES6 이전에는 지원을 하지 못해서 BlueBirds 등 다양한 외부 라이브러리를 사용했지만, ES6 이후로 내장되었다.


### REST API

REST API (통신 양식)
CRUD = 표현한 것
CRUD로 세상에 모든 걸 표현할 수 있다.
Create = 생성, Read = 읽기, Update = 갱신, Delete = 삭제
axios = REST API 방식으로 CRUD를 구현한 Node.js 네트워크 모듈

### URL 생성 방식 

?q="+city+"&appid="+"내APIKEY"
http://api.openweathermap.org/data/2.5/weather? <- ? 이후에 받는 애들은, 데이터이다.
http://api.openweathermap.org/data/2.5/weather?q=city&appid=8d1ec898f40cd4ccdfd68aec10be083b
q = city
appid = 8d1ec898f40cd4ccdfd68aec10be083b
{
  q: 'city',
  appid: '8d1ec898f40cd4ccdfd68aec10be083b'
}
? 이후에 들어간 데이터들을 => query string 이라고 표현.

### encodeURIComponent

- 그냥 가져오면 깨지므로 encodeURIComponent를 사용

## ETC

- 절대온도: 전세계 온도 공통 규칙
- 섭씨온도: 한국에서 많이쓰는 온도 규칙 :: 절대온도 - 273 하면 값 나옴
- 화씨온도: 외국에서 많이쓰는 온도 규칙 :: 공식 있음.