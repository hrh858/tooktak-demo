import Chat from "@/components/Chat";
import Header from "@/components/Header";
import InputBar from "@/components/InputBar";
import Message, { type MessageT } from "@/components/Message";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export default function Scenario1() {
  const [messages, setMessages] = useState<MessageT[]>([]);
  const [showUntil, setShowUntil] = useState(-1);

  const MESSAGES: MessageT[] = [
    {
      id: 1,
      sender: "user",
      text: "아기 발진",
    },
    {
      id: 2,
      sender: "bot",
      text: "그럼 아이가 불편하겠어요. 가까운 'ABC 병원'의 예약 가능한 가장 빠른 시간은 오늘 2시입니다. 이 시간으로 예약을 진행할까요?",
      embeddings: [
        {
          type: "button",
          onClick: () => {
            setShowUntil((s) => s + 2);
          },
          text: "Yes",
        },
        { type: "button", onClick: () => { }, text: "No" },
      ],
    },
    {
      id: 3,
      sender: "bot",
      text: "'ABC 병원'에 2시 예약 완료했습니다.",
      embeddings: [
        {
          type: "hospital",
        },
      ],
    },
    {
      id: 4,
      sender: "bot",
      text: "병원까지 카카오 택시를 호출해드릴까요?",
      embeddings: [
        {
          type: "button",
          onClick: () => {
            setShowUntil((s) => s + 3);
          },
          text: "Yes",
        },
        {
          type: "button",
          onClick: () => { },
          text: "No",
        },
      ],
    },
    {
      id: 5,
      sender: "bot",
      text: "택시 호출 완료했습니다. 5분 내 도착 예정입니다.",
      embeddings: [{ type: "taxi" }],
    },
    {
      id: 6,
      sender: "bot",
      text: "그리고 아기 발진 케어를 위한 아이템들에 대해 알아보시겠어요? 추천 제품들이 여기 있습니다.",
      embeddings: [
        {
          type: "product",
          imageUrl:
            "https://cdn6-kinx.makeshop.co.kr/shopimages/2020nemomq/0010030008732.jpg?1654679536",
          url: "https://www.momq.co.kr/shop/shopdetail.html?branduid=14315&xcode=012&mcode=015&scode=001&type=Y&sort=sellcnt&cur_code=012015&GfDT=Z293Uw%3D%3D",
          name: "그린핑거 판테딘 판테놀 멀티밤 14g (EA)",
        },
        {
          type: "product",
          imageUrl:
            "https://cdn6-kinx.makeshop.co.kr/shopimages/2020nemomq/0010040037102.jpg?1680091769",
          url: "https://www.momq.co.kr/shop/shopdetail.html?branduid=18500&source=igodigital",
          name: "2023 하기스 매직컴포트 썸머 3단계 공용 136매 (밴드형)",
        },
        {
          type: "product",
          imageUrl:
            "https://cdn6-kinx.makeshop.co.kr/shopimages/2020nemomq/0010030004242.jpg?1604043700",
          url: "https://www.momq.co.kr/shop/shopdetail.html?branduid=9943&search=%25C4%25C9%25BE%25EE&sort=sellcnt&xcode=001&mcode=003&scode=018&GfDT=bm98W1s%3D",
          name: "그린핑거 촉촉한 자연보습 로션 500ml (EA)",
        },
      ],
    },
    {
      id: 7,
      sender: "bot",
      text: "원하시는 제품을 선택해주세요.",
      embeddings: [
        {
          type: "button",
          onClick: () => {
            setShowUntil((s) => s + 1);
          },
          text: "파우더 주문",
        },
        {
          type: "button",
          onClick: () => {
            setShowUntil((s) => s + 1);
          },
          text: "기저귀 주문",
        },
        {
          type: "button",
          onClick: () => {
            setShowUntil((s) => s + 1);
          },
          text: "로션 주문",
        },
      ],
    },
    {
      id: 8,
      sender: "bot",
      text: "선택하신 제품들의 주문을 완료했습니다. 배송은 내일 도착 예정입니다. 아기의 상태가 빨리 나아지길 바라겠습니다.",
    },
  ] as any;

  // {
  //   sender: "bot",
  //   text: BOT_MESSAGES[1].text,
  //   timestamp: new Date(),
  //   embeddings: BOT_MESSAGES[1].embeddings,
  // },
  // {
  //   sender: "bot",
  //   text: BOT_MESSAGES[2].text,
  //   timestamp: new Date(),
  //   embeddings: BOT_MESSAGES[2].embeddings,
  // },
  // {
  //   sender: "bot",
  //   text: BOT_MESSAGES[3].text,
  //   timestamp: new Date(),
  //   embeddings: BOT_MESSAGES[3].embeddings,
  // },
  // {
  //   sender: "bot",
  //   text: BOT_MESSAGES[4].text,
  //   timestamp: new Date(),
  //   embeddings: BOT_MESSAGES[4].embeddings,
  // },
  // {
  //   sender: "bot",
  //   text: BOT_MESSAGES[5].text,
  //   timestamp: new Date(),
  //   embeddings: BOT_MESSAGES[5].embeddings,
  // },
  // {
  //   sender: "bot",
  //   text: BOT_MESSAGES[6].text,
  //   timestamp: new Date(),
  //   embeddings: BOT_MESSAGES[6].embeddings,
  // },

  // if (messages.length === 5) {
  //   setMessages((m) => [
  //     ...m,
  //     {
  //       sender: "bot",
  //       text: BOT_MESSAGES[6].text,
  //       timestamp: new Date(),
  //       embeddings: BOT_MESSAGES[6].embeddings,
  //     },
  //   ]);
  // }
  //

  return (
    <Chat>
      <div className="w-full">
        <Header />
      </div>
      <AnimatePresence>
        <div className="w-full h-full overflow-y-auto py-2 md:py-4 gap-5 flex flex-col-reverse px-2 md:px-8">
          {MESSAGES.splice(0, showUntil)
            .reverse()
            .map((m) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: m.sender === "bot" ? 2 : 1,
                  ease: "easeIn",
                }}
              >
                <Message {...m} />
              </motion.div>
            ))}
        </div>
      </AnimatePresence>
      <div className="mt-auto w-full py-2 md:py-4 px-2 md:px-8">
        <InputBar
          onSend={(text) => {
            setShowUntil(2);
          }}
        />
      </div>
    </Chat>
  );
}
