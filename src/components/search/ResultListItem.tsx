import React from 'react'

type Props = {
  key: string;
  text: string;
}

function ResultListItem({ key, text }: Props) {
  return (
    <div>
      <li key={key} className="hover:bg-green-200 rounded-sm text-gray-600 ">
        <a>{text}</a>
      </li>
    </div>
  )
}

export default ResultListItem