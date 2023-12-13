import React from 'react'
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div className='about-content'>
        <h2>お問い合わせ送信完了</h2>
        <p>お問い合わせありがとうございます。</p>
        
        <Link to='/'>ホームへ戻る</Link>
    </div>
  )
}

export default Success