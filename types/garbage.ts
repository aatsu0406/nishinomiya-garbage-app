// 西宮市のゴミの分類
export type GarbageCategory =
  'burnable'  //もやすゴミ
  | 'unburnable'  //その他不燃ゴミ
  | 'bottle'  //瓶
  | 'can_pet'  //缶・ペットボトル
  | 'plastic'  //プラスチック
  | 'resource';  //資源ゴミ

// 周期の種類
export type ScheduleType = 'weekly' | 'bi-weekly';

export interface GarbageSchedule {
  type:ScheduleType;
  dayOfWeek: number; // 0:日曜日, 1:月曜日, ..., 6:土曜日
  weekNumbers?: number[]; // 週番号（bi-weeklyの場合に使用）
}

export interface GarbageRule {
  id:string;
  category: GarbageCategory;
  label:string; // 表示名（例：「燃やすごみ」）
  color: string;  // UIで使う色（Tailwindのクラス名やHex）
  schedules: GarbageSchedule[]; // 収集日は複数あるので配列
}