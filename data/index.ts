interface ProjectProperty {
  id: string;
  image: string;
  title: string;
  location: string;
  distance: string;
}
// {
//   avatar: "/images/msg-bot.png",
//   title: "Chat bot",
//   content: "Dạ, căn nhà anh đang....",
//   time: "3m ago",
//   unread: true,
// },

interface MessageItemProperty {
  isMine: boolean;
  content: string;
}

export interface MessageProperty {
  id: string;
  avatar: string;
  title: string;
  content: string;
  time: string;
  unread: boolean;
  chatList: MessageItemProperty[];
}

export const projects: ProjectProperty[] = [
  {
    id: "pro-1",
    title: "CCCC 2PN-1VS",
    location: "Tây Hồ",
    distance: "3.4",
    image: "/images/image-1.png",
  },
  {
    id: "pro-2",
    title: "Căn hộ 1PN-1PK",
    location: "Từ Liêm",
    distance: "2",
    image: "/images/image-2.png",
  },
  {
    id: "pro-3",
    image: "/images/image-3.png",
    title: "Nhà 2 tầng",
    location: "Thanh Xuân",
    distance: "4.5",
  },
  {
    id: "pro-4",
    image: "/images/image-4.png",
    title: "Nhà 3 tầng",
    location: "Hoàn Kiếm",
    distance: "6",
  },
  {
    id: "pro-5",
    image: "/images/image-5.png",
    title: "Nhà 4 tầng",
    location: "Đống Đa",
    distance: "8",
  },
  {
    id: "pro-8",
    image: "/images/image-6.png",
    title: "Biệt thự liền kề",
    location: "Ba Đình",
    distance: "10",
  },
];

export const messageList: MessageProperty[] = [
  {
    id: "chatbot",
    avatar: "/images/msg-bot.png",
    title: "Chat bot",
    content: "Dạ, căn nhà anh đang....",
    time: "3m ago",
    unread: true,
    chatList: [
      {
        isMine: false,
        content: `Cảm ơn anh đã quan tâm căn chung cư 2 ngủ, 1 khách tại Kim Mã. Anh
            có cầu hỏi gì không ạ?`,
      },
      {
        isMine: true,
        content: `Rộng bao nhiêu?`,
      },
      {
        isMine: true,
        content: `Căn này ở tầng mấy thế?`,
      },
      {
        isMine: false,
        content: `Dạ, căn anh đang quan tâm rộng 80m2 ạ. Căn này ở tầng 12 ạ.`,
      },
    ],
  },
];
