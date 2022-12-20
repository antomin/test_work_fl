from fastapi import FastAPI, WebSocket

app = FastAPI()


@app.websocket('/ws')
async def root(ws: WebSocket):
    await ws.accept()
    cnt = 1
    while True:
        rec_data = await ws.receive_json()
        if rec_data['action'] == 'echo_send':
            send_data = {
                'action': 'answer',
                'num': cnt,
                'message': rec_data['message']
            }
            await ws.send_json(send_data)
            cnt += 1
