import { GarbageRule } from '@/types/garbage';

// 指定された日付がその月の「第何週（第何◯曜日）」かを返す
export const getWeekOfMonth = (date:Date):number => {
  const dayOfMonth = date.getDate();
  return Math.floor((dayOfMonth - 1) / 7) + 1;
};

// 今日のゴミ出し情報を判定するためのヘルパー
export const getDayInfo = (date:Date) => {
  return {
    dayOfWeek:date.getDay(),
    weekNumber:getWeekOfMonth(date),
  };
};

// 指定された日付に収集されるゴミを抽出する
export const getGarbageForDate = (date:Date, rules:GarbageRule[]):GarbageRule[] => {
  const { dayOfWeek, weekNumber } = getDayInfo(date);

  return rules.filter((rule) => {
    // ルールのスケジュールのどれかが今日にマッチするか
    return rule.schedules.some((s) => {
      // 曜日が一致するか
      const isSameDay = s.dayOfWeek === dayOfWeek;

      // 週番号が必要な場合は一致するか
      let isCorrectWeek = false;
      if (s.type === 'weekly') {
        // 毎週なら週番号は関係ない
        isCorrectWeek = true;
      } else if (s.type === 'bi-weekly' && s.weekNumbers) {
        // 隔週なら、今日の週番号がルールの週番号に含まれているか
        isCorrectWeek = s.weekNumbers.includes(weekNumber);
      }

      return isSameDay && isCorrectWeek;
    }
    )
  }

  )
}