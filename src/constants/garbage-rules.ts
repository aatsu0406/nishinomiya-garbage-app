import { GarbageRule } from '@/types/garbage';

export const NISHINOMIYA_HIRAMATSU_GARBAGE_RULES: GarbageRule[] = [
  //西宮市平松町のごみ出しルール
  {
    id: 'burnable',
    category: 'burnable',
    label: '燃やすごみ',
    color: 'bg-red-500',
    bagType: 'もやすごみ専用指定袋',
    items: ['生ごみ', 'プラスチック製品（プラ単一素材かつ50cm未満', '皮革','ゴム類','再資源化できない紙、布等'],
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
    bagType: '共通指定袋',
    items: ['小型複合製品', '傘', '小型家電、陶磁器','小型金属製品','ガラス製品', 'スプレー缶', '電池', '蛍光灯等指定袋に入るもので、かつ5kg未満のもの'],
    schedules: [
      { type: 'weekly', dayOfWeek: 4 }, // 木曜日
    ],
  },
  {
    id: 'bottle',
    category: 'bottle',
    label: '瓶',
    color: 'bg-blue-500',
    bagType: 'コンテナ',
    items: ['ガラス瓶'],
    schedules: [
      { type: 'bi-weekly', dayOfWeek: 3, weekNumbers: [1, 3] }, // 第１・第３水曜日
    ],
  },
  {
    id: 'can_pet',
    category: 'can_pet',
    label: '缶・ペットボトル',
    color: 'bg-green-500',
    bagType: '共通指定袋',
    items: ['スチール缶', 'アルミ缶', 'ペットボトル'],
    schedules: [
      { type: 'weekly', dayOfWeek: 1 }, // 月曜日
    ],
  },
  {
    id: 'plastic',
    category: 'plastic',
    label: 'プラスチック',
    color: 'bg-yellow-500',
    bagType: '共通指定袋',
    items: ['容器包装プラスチック'],
    schedules: [
      { type: 'weekly', dayOfWeek: 3 }, // 木曜日
    ],
  },
  {
    id: 'resource',
    category: 'resource',
    label: '資源ごみ',
    color: 'bg-orange-500',
    bagType: '古着のみ共通指定袋',
    items: ['新聞', '紙パック', '段ボール', '古着', '雑誌', 'チラシ', '雑紙', '紙箱', '紙袋等'],
    schedules: [
      { type: 'bi-weekly', dayOfWeek: 4, weekNumbers: [1, 3] }, // 第１・第３木曜日
    ],
  },
]