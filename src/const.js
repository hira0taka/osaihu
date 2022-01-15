// 指定したnameのfirebaseのurlを返す関数
// アロー関数では、1つの要素しかreturn しない場合は returnの文字を省略できます
// export キーワードで違うファイルからこの関数を呼び出し可能にすることができます
export const  makeFirebaseURL = (name) => `https://osaihu-3e519-default-rtdb.asia-southeast1.firebasedatabase.app/${name}.json`