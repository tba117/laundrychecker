import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Mail = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({   //formDataの初期値の定義
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;   //name属性とvalue属性の取り出し 名前のnameではないので注意
    setFormData({  //formDataに
      ...formData,   //...スプレット演算子
      [name]: value,
    });
  };


  // フォームのデータをサーバーに送信する
  const handleSubmit = async (e) => {
    e.preventDefault();  //通常フォーム送信時にページのリロードが行われるが、それをキャンセルする

    try{
      const response = await fetch('https://laundrychecker-back-8e9bacf9c706.herokuapp.com/send-email', {  //fetch:/send-emailからデータを取得
        method: 'POST',                //バックエンド側のURL
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      //HTTPレスポンスが成功したかどうか
      if(response.ok){  //okがtrueの場合
        console.log("Email sent successfully!");
        navigate('/success');  //Succces.jsxの呼び出し
      } else {   //okがfalseの場合
        console.log('Failed to send email');
      }

    } catch(error) {  //非同期処理の中でエラーが発生した場合
      console.error('Error sending email:', error);
    }
  };

  return (
    <div className="mail-content">
        <h2>Contact</h2>
            <ul>
              <li>・こちらのページは、「洗濯表示チェッカー」に関するお問い合わせ・ご意見の送信専用です。</li>
              <br/>  
              <li>・診断対象となる衣類等に洗濯表示がない場合は、このサイトはご利用できません。</li>
              <br/>
              <li>・色落ちに関することは、ご自身で確認をお願いします。</li>
              <br/>
              <li>・レーヨン、絹、キュプラ、アセテート、皮革、毛皮製品が含まれている衣類等は選択できませんのでご注意ください。</li>
              <br/>
              <li>・スーツやジャケット、和服、コートなどはクリーニングショップにご相談ください。</li>
              <br/>
              <li>・洗濯表示に注意事項がある場合は、それらにしたがって下さい。</li> 
              <br/>
              <li>・お客さまに回答したメールの内容を転用・転載することはご遠慮ください。</li>
              <br/>
              <li>・本フォームにて送信いただいたお問合せについては、原則３日以内にご返信差し上げます。４日以上経過しても返信がない場合には、大変お手数ですが再度フォームからご連絡いただけますと幸いです。</li>
              <br/>
              <li>・携帯電話メールの場合は、ドメイン「laundrycheckerapp@gmail.com」からのメールが迷惑メールとして認識されないよう設定をお願いいたします。</li>
              <br/>
              <li>・入力されたメールアドレスに誤りがある場合は、お問合せへの回答ができませんのでご注意ください。</li>
              <br/>
              <li>・ご提供いただいた個人情報は、<Link to="/privacy">プライバシーポリシー</Link>に基づき、利用目的の範囲内で利用させていただき、他には一切使用いたしません。</li>
            </ul>

        <section className="section">
            <form className="content-from-contactFrom" onSubmit={handleSubmit}>  {/* onSubmit:フォームの送信時にイベント実行 */}
              <dl>
                <dt>お名前(ニックネーム可)</dt>
                <dd><input type="text" name="name" onChange={handleInputChange} value={formData.name} required /></dd>   {/* onChange:フォームが入力された時にイベント実行 */}
                <dt>メールアドレス</dt>
                <dd><input type="email" name="email" onChange={handleInputChange} value={formData.email} required /></dd>
                <dt>お問い合わせ内容</dt>
                <dd><textarea name="message" onChange={handleInputChange} value={formData.message} required></textarea></dd>
              </dl>
              <div className="btnWrap">
                <button type="submit" className="button" >送信</button>
              </div>
            </form>
        </section>
    </div>
  )
}

export default Mail