import { create } from 'tailwind-rn';
import styles from './styles.json'; // Đường dẫn này có thể thay đổi tùy dự án của bạn
const { tailwind, getColor } = create(styles);

export { tailwind, getColor };
