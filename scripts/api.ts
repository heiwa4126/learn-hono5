const EndPoint = "http://localhost:3000";

export async function postAuthor(data: object) {
	const url = `${EndPoint}/api/author`;

	try {
		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				// "Custom-Header": "CustomValue", // 任意のカスタムヘッダ
			},
			body: JSON.stringify(data),
		});

		// レスポンスヘッダの表示
		console.log("Response Headers:");
		for (const [key, value] of response.headers) {
			console.log(`${key}: ${value}`);
		}

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const responseData = await response.json();
		console.log("Response Body:", responseData);
	} catch (error) {
		console.error("Error posting author:", error);
	}
}
