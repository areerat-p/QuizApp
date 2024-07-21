// data/questions.ts
export interface Question {
    id: string;
    question: string;
    answers: string[];
    correctAnswer: string;
  }
  
  const questions: Question[] = [
    { id: '1', question: 'ประเทศไทยมีจำนวนจังหวัดทั้งหมดกี่จังหวัด?', answers: ['76', '77', '78', '79'], correctAnswer: '77' },
    { id: '2', question: '2 + 3 เท่ากับเท่าไร?', answers: ['4', '5', '6', '7'], correctAnswer: '5' },
    { id: '3', question: 'ผลไม้ชนิดใดมีสีแดง?', answers: ['มะม่วง', 'แตงโม', 'กล้วย', 'สับปะรด'], correctAnswer: 'แตงโม' },
    { id: '4', question: 'วันคริสต์มาสตรงกับวันที่เท่าไร?', answers: ['24 ธันวาคม', '25 ธันวาคม', '31 ธันวาคม', '1 มกราคม'], correctAnswer: '25 ธันวาคม' },
    { id: '5', question: 'สัตว์ชนิดใดที่ร้องว่า "เมี๊ยว"?', answers: ['สุนัข', 'แมว', 'นก', 'ปลา'], correctAnswer: 'แมว' },
    { id: '6', question: 'ผลไม้ชนิดใดมีเปลือกสีเหลือง?', answers: ['มะละกอ', 'มังคุด', 'กล้วย', 'ทุเรียน'], correctAnswer: 'กล้วย' },
    { id: '7', question: 'ฤดูร้อนในประเทศไทยเริ่มต้นในเดือนไหน?', answers: ['มกราคม', 'มีนาคม', 'พฤษภาคม', 'กรกฎาคม'], correctAnswer: 'มีนาคม' },
    { id: '8', question: 'ข้าวเป็นอาหารหลักของประเทศใด?', answers: ['ญี่ปุ่น', 'อิตาลี', 'อินเดีย', 'ไทย'], correctAnswer: 'ไทย' },
    { id: '9', question: 'สีใดคือสีของท้องฟ้าในวันที่อากาศแจ่มใส?', answers: ['เขียว', 'แดง', 'เหลือง', 'ฟ้า'], correctAnswer: 'ฟ้า' },
    { id: '10', question: 'มะนาวมีรสชาติอย่างไร?', answers: ['หวาน', 'เปรี้ยว', 'เค็ม', 'ขม'], correctAnswer: 'เปรี้ยว' },
    { id: '11', question: 'สัตว์ชนิดใดที่อาศัยอยู่ในน้ำ?', answers: ['สุนัข', 'แมว', 'ปลา', 'นก'], correctAnswer: 'ปลา' },
    { id: '12', question: 'รถยนต์ใช้พลังงานอะไรในการขับเคลื่อน?', answers: ['น้ำ', 'ไฟฟ้า', 'น้ำมัน', 'ลม'], correctAnswer: 'น้ำมัน' },
    { id: '13', question: 'ผลไม้ชนิดใดมีเปลือกสีเขียว?', answers: ['ส้ม', 'แอปเปิ้ล', 'มะม่วง', 'องุ่น'], correctAnswer: 'มะม่วง' },
    { id: '14', question: 'สัตว์ชนิดใดที่บินได้?', answers: ['ช้าง', 'นก', 'เสือ', 'ม้า'], correctAnswer: 'นก' },
    { id: '15', question: '1 ปีมีกี่วัน?', answers: ['365', '366', '367', '368'], correctAnswer: '365' },
    { id: '16', question: 'สีใดเป็นสีของมะเขือเทศ?', answers: ['เขียว', 'เหลือง', 'แดง', 'ส้ม'], correctAnswer: 'แดง' },
    { id: '17', question: 'ในวันเกิดปกติจะมีกิจกรรมใด?', answers: ['ทำงาน', 'เรียน', 'กินเค้ก', 'เดินเล่น'], correctAnswer: 'กินเค้ก' },
    { id: '18', question: 'เด็กๆ ไปโรงเรียนเพื่อทำอะไร?', answers: ['ทำงาน', 'เล่น', 'เรียนหนังสือ', 'นอน'], correctAnswer: 'เรียนหนังสือ' },
    { id: '19', question: 'ผลไม้ชนิดใดมีเมล็ดข้างใน?', answers: ['แตงโม', 'มะม่วง', 'กล้วย', 'แอปเปิ้ล'], correctAnswer: 'แตงโม' },
    { id: '20', question: 'สัตว์ชนิดใดที่มีหางยาว?', answers: ['สุนัข', 'แมว', 'นก', 'ปลา'], correctAnswer: 'แมว' }
  ];
  
  export default questions;
  