import http from 'k6/http';
import { sleep } from 'k6';
export const options = { vus: 30, duration: '30s' }; // 30 concurrent users for 30s
export default function () {
    http.get('http://YOUR_EC2_PUBLIC_IP:3000/api/data');
    sleep(1);
}
