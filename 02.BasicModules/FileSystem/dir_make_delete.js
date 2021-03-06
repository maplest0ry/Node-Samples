const fs = require('fs');

// 디렉토리 생성
fs.mkdir('test', err => {
   if ( err ) {
      console.error('mkdir error : ', err);
      return;
   }
   console.log('test 디렉토리 생성 성공');
   
   
   // 파일 하나 생성
   fs.writeFileSync('./test/text.txt', 'Hello World');
   console.log('test 디렉토리 내 파일 생성');
   
   // 디렉토리 삭제
   fs.rmdir('test', err => {
      if ( err ) {
         console.log('비어있지 않은 디렉토리 삭제 실패');
         
         // 디렉토리 내 파일 삭제
         fs.unlinkSync('test/text.txt');
         
         fs.rmdir('test', err => {
            if ( err ) {
               console.error('비어있는 디렉토리 test 삭제 에러');
               return;
            }
            console.log('비어있는 디렉토리 test 삭제 성공');
         });         
      }
      else {
         console.error('에러 : 비어있지 않은 디렉토리 test 삭제');
      }
   });
});
