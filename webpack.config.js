const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

require('webpack')

module.exports = {
  entry: {
    // # 최초 진입점
    // app: './src/index.js',
    prototype: './src/3_week/function/prototype.js',
  },
  /** 
   * 서로 의존성이 없는 복수의 파일은 array 형식으로 사용 가능
      entry : ['./src/index.js', './src/googleAPI.js]
   * 멀티페이지 애플리케이션의 경우, 복수의 엔트리 포인트 지정 가능
      entry: { 
        main : ./src/main.js
        login : ./src/login.js
      }
  */
  output: {
    // # 웹팩 결과물 (객채형태)
    filename: '[name].bundle.js', // bundle 될 파일 이름 (필수)
    /**
     * filename: '[name].[hash].bundle.js', // 고유 컴파일 해시
     * filename: '[chunkhash].bundle.js', // 변경사항이 있는 hash만 변경 [name] + [hash]
     * filename: '[contenthash]].bundle.js', // 변경사항이 있는 hash만 변경
     */
    chunkFilename: '[id].bundle.js',
    path: path.resolve(__dirname, 'dist'), // bundle 될 파일 위치
    /**
     * path.resolve() ≒ path.join()
     * 인자로 받은 경로들을 합쳐서 문자열 형태로 리턴하는 함수
     * 오른쪽부터 왼쪽으로 합치는 형태
     * '/' 를 만나면 절대경로로 인식해서 나머지 경로인자를 무시
     * '..' 상위경로가 있을 경우 왼쪽에 있는 경로인자 제외
     */
    publicPath: '/assets/', // 브라우저 참조시 출력 파일의 공용 url
  },
  devtool: 'inline-source-map', // source map 처리 (에러, 디버깅 용이)
  resolve: {
    // # 모듈 해석 옵션
    extensions: ['.js'], // 확장자를 생략
    /**
     * 동일 파일명이 존재할경우 가장 먼저 나열된 확장자 적용
     */
  },
  module: {
    // # 일반 모듈 옵션
    rules: [
      {
        test: /\.(js)$/, // loader 를 적용할 조건
        exclude: /node_modules/, // loader를 제외할 조건
        use: ['babel-loader'],
        /**
         * loader : "babel-loader" , // 기본형태
         * use: ['babel-laoder', 'babel-loader'] // 복수의 로더 이용시 use 옵션 이용
         */
      },
    ],
  },
  plugins: [
    // # 번들링 옵션
    new HtmlWebpackPlugin({
      // template: './public/index.html', // entry 역할
      template: './src/3_week/function/index.html',
      filename: './index.html', // output 역할
      showErrors: true, // 에러 발생시 메세지가 브라우저 화면에 노출 여부
      /**
       * 번들링 된 스크립트를 자동으로 html 삽입
       */
    }),
  ],
  devServer: {
    // # webpack dev server
    contentBase: path.resolve(__dirname, 'dist'), // dev sever 경로 시작점
    inline: true, // 전체 페이지에 대한 실시간 리로딩
    hot: true, // 컴포넌트 수정시 수정된 부분만 리로딩
    /**
     * 새로고침 및 자동 번들링 (HMR - hot moudle reloader)
     * hot 과 inline 옵션이 모두 지정되어있을경우 hot 옵션이 우선적으로 발생
     */
    open: true, // dev 서버 새창으로 열기
  },
}
