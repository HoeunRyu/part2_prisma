import * as s from "superstruct";
import isEmail from "is-email";

//유효성 검사해주는 라이브러리

// s.object는 객체를 정의하는 것
export const CreateUser = s.object({
  email: s.define("Email", isEmail), // "Email함수는 isEmail을 통과하는 값들"
  name: s.size(s.string(), 1, 30), // string 타입의 길이를 제한
  address: s.size(s.string(), 1, 100),
  age: s.min(s.max(s.number(), 100), 18), // 최소 18, 최대 100으로 제한
  userPreference: s.object({
    receiveEmail: s.boolean(),
  }),
});

// 파셜 - CreateUser의 일부면 괜찮다
// 위의 조건중 하나 이상 만족하면 통과.
export const PatchUser = s.partial(CreateUser);
