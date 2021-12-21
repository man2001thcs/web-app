import { v4 as uuid } from 'uuid';

export const products = [
  {
    id: uuid(),
    createdAt: '27/03/2019',
    description: 'Vợt cầu lông, quần vợt các loại,...',
    media: '/static/images/icon_instrument/racket_icon.png',
    title: 'Vợt',
    totalDownloads: '594'
  },
  {
    id: uuid(),
    createdAt: '31/03/2019',
    description: 'Ván trượt bền làm từ gỗ abcxyz',
    media: '/static/images/icon_instrument/skate_icon.png',
    title: 'Ván trượt',
    totalDownloads: '625'
  },
  {
    id: uuid(),
    createdAt: '03/04/2019',
    description: 'Bộ thiết bị tập luyện cơ tay',
    media: '/static/images/icon_instrument/dumbbell_icon.png',
    title: 'Dumbbell',
    totalDownloads: '857'
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'Bộ cung tên thể thao hiện đại, chất liệu cao cấp',
    media: '/static/images/icon_instrument/bow_icon.png',
    title: 'Cung',
    totalDownloads: '406'
  },

];
