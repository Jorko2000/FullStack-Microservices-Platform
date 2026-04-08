from fastapi import FastAPI
import redis
app = FastAPI()
r = redis.Redis(host='redis', port=6379, db=0)
@app.get('/metrics')
def get_metrics():
    r.incr('metrics_requests')
    return {'requests': int(r.get('metrics_requests'))}
