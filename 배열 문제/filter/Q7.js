// 이메일 주소가 '@' 기호를 포함하지 않은 경우를 제외하는 함수를 작성하세요.
const emails = ["tom@example.com", "janeatdomain.com", "peter@sample.net"];
const validEmails = (emails) => emails.filter((email) => email.includes("@"));
console.log(validEmails(emails)); // ['tom@example.com', 'peter@sample.net']
