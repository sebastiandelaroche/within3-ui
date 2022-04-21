import { useState } from 'react';
import { ZipCode } from '../types';

const HISTORY_KEY = '__HISTORY_KEY__';

const setLocalStorageHistory = (records: ZipCode[]) =>
  localStorage.setItem(HISTORY_KEY, JSON.stringify(records));

  const getLocalStorageHistory = () =>
  JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');

export function useHistoryZipCodes() {
  const [history, setHistory] = useState<ZipCode[]>(getLocalStorageHistory());

  const addHistory = (record: ZipCode) => {
    const records = [record, ...history];
    setLocalStorageHistory(records);
    setHistory(records);
  };

  const clearHistory = () => {
    setLocalStorageHistory([]);
    setHistory([]);
  };

  const getLast5History = () => history.slice(0, 5);

  return {
    history,
    addHistory,
    clearHistory,
    getLast5History,
  };
}
