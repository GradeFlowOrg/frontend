export function setItem(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Error setting item in localStorage:", error);
  }
}

export function getItem(key: string) {
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error("Error getting item from localStorage:", error);
    return null;
  }
}

export function removeItem(key: string) {
    try{
        window.localStorage.removeItem(key);
    } catch (error) {
        console.error("Error removing item from localStorage:", error);
    }
}