// src/app/page.tsx
'use client'; // 日付の処理をクライアントで行うため追加

import { NISHINOMIYA_HIRAMATSU_GARBAGE_RULES } from '@/src/constants/garbage-rules';
import { getGarbageForDate } from '@/src/utils/date-logic';
import { useEffect, useState } from 'react';
import { GarbageRule } from '@/types/garbage';

export default function Home() {
  const [todaysGarbage, setTodaysGarbage] = useState<GarbageRule[]>([]);
  const [today, setToday] = useState<Date>(new Date());

  useEffect(() => {
    // 画面が表示された時に、今日の日付からゴミを判定する
    const rules = getGarbageForDate(today, NISHINOMIYA_HIRAMATSU_GARBAGE_RULES);
    setTodaysGarbage(rules);
  }, [today]);

  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-gray-50">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
          西宮市平松町 ゴミ出し情報
        </h1>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
          <p className="text-xl mb-4 text-gray-600">
            今日（{today.toLocaleDateString('ja-JP', { month: 'long', day: 'numeric', weekday: 'short' })}）のゴミは...
          </p>

          <div className="flex flex-wrap gap-4">
            {todaysGarbage.length > 0 ? (
              todaysGarbage.map((rule) => (
                <div
                  key={rule.id}
                  className="flex flex-col p-6 rounded-2xl border border-gray-100 shadow-sm bg-white w-full mb-4">
                  {/* 1. ゴミの種類 */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`w-3 h-8 rounded-full ${rule.color}`}></span>
                    <h2 className="text-3xl font-black text-gray-800 tracking-tight">
                      {rule.label}
                    </h2>
                  </div>

                  {/* 2. 出す袋の情報 */}
                  <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                    <span className="text-sm font-bold text-gray-500 bg-gray-200 px-2 py-0.5 rounded">
                      出す袋
                    </span>
                    <span className="text-lg font-bold text-gray-700">
                      {rule.bagType}
                    </span>
                  </div>

                  <div className="mt-4">
                    <p className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-widest">
                      主な対象品目
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {rule.items.map((item, index) => (
                        <span
                          key={index}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md border border-gray-200"
                        >
                          {item}
                        </span>
                      ))}
                      <span className="text-xs text-gray-400 self-center">...など</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-2xl text-gray-400 font-bold">今日は収集がありません</p>
            )}
          </div>
        </div>

        {/* デバッグ用：日付を切り替えるボタン */}
        <div className="mt-12 flex gap-4">
          <button
            onClick={() => {
              const tomorrow = new Date(today);
              tomorrow.setDate(tomorrow.getDate() + 1);
              setToday(tomorrow);
            }}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
          >
            翌日の判定を見る →
          </button>
          <button
            onClick={() => setToday(new Date())}
            className="border text-black border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
          >
            今日に戻す
          </button>
        </div>
      </div>
    </main>
  );
}