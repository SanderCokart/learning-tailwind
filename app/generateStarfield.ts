// constants
const COLOR_SPACE = 'black';
const COLOR_STARS = 'white';
const STAR_NUM = 200; // number of stars in the starfield
const STAR_SIZE = 0.005; // max star size as a fraction of screen width
const STAR_SPEED = 0.05; // fraction of screen width per second

export default function generateStarfield(id = 'starfield') {
    const canvas = document.getElementById(id) as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    canvas.width = (canvas.parentElement?.clientWidth ?? 500);
    canvas.height = (canvas.parentElement?.clientHeight ?? 500) + 68;

    const stars: { r: number; x: number; y: number; xv: number; yv: number }[] = [];
    let timeDelta: number, timeLast = 0;

    const randomSign = () => {
        return Math.random() >= 0.5 ? 1 : -1;
    };

    const loop = (timeNow: number) => {
        timeDelta = timeNow - timeLast;
        timeLast = timeNow;

        ctx.fillStyle = COLOR_SPACE;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = COLOR_STARS;
        stars.forEach(star => {
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
            ctx.fill();

            star.x += star.xv * timeDelta * 0.001;

            if (star.x < 0 - star.r) {
                star.x = canvas.width + star.r;
            } else if (star.x > canvas.width + star.r) {
                star.x = 0 - star.r;
            }

            star.y += star.yv * timeDelta * 0.001;

            if (star.y < 0 - star.r) {
                star.y = canvas.height + star.r;
            } else if (star.y > canvas.height + star.r) {
                star.y = 0 - star.r;
            }
        });

        requestAnimationFrame(loop);
    };

    const starSpeed = STAR_SPEED * canvas.width;
    const xv = starSpeed & randomSign() * Math.random();
    const yv = Math.sqrt(Math.pow(starSpeed, 2) - Math.pow(xv, 2)) * randomSign();

    for (let i = 0; i < STAR_NUM; i++) {
        const speedMulti = Math.random() * 1.5 + 0.5;
        stars[i] = {
            r: Math.random() * STAR_SIZE * canvas.width / 2,
            x: Math.floor(Math.random() * canvas.width),
            y: Math.floor(Math.random() * canvas.height),
            xv: xv * speedMulti,
            yv: yv * speedMulti
        };
    }

    requestAnimationFrame(loop);
}