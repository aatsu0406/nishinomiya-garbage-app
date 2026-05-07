import { GarbageRule } from '@/types/garbage';

export const NISHINOMIYA_GARBAGE_RULES: GarbageRule[] = [
  //テストデータ
  {
    id: 'burnable',
    category: 'burnable',
    label: '燃やすごみ',
    color: 'bg-red-500',
    schedules: [
      { type: 'weekly', dayOfWeek: 2 }, // 火曜日
      { type: 'weekly', dayOfWeek: 5 }, // 金曜日
    ],
  },
  {
    id: 'unburnable',
    category: 'unburnable',
    label: 'その他不燃ごみ',
    color: 'bg-gray-500',
    schedules: [
      { type: 'weekly', dayOfWeek: 4 }, // 木曜日
    ],
  }
]