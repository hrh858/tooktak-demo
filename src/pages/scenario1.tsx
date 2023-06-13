import Chat from "@/components/Chat";
import Header from "@/components/Header";
import InputBar from "@/components/InputBar";
import Message, { type MessageT } from "@/components/Message";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const SHOW_MORE_DELAY_SECS = 0.6;

export default function Scenario1() {
  const [messages, setMessages] = useState<MessageT[]>([]);
  const [showUntil, setShowUntil] = useState(1);

  const showMore = (howMany: number) => {
    const curr = showUntil;
    for (let i = 0; i < howMany; i++) {
      setTimeout(() => {
        setShowUntil(curr + i + 1);
      }, SHOW_MORE_DELAY_SECS * i * 1000);
    }
  };

  const MESSAGES: MessageT[] = [
    {
      id: 1,
      sender: "bot",
      text: "요즘 세준이 발진 때문에 걱정이 많으신 것 같네요. 도와드릴까요?",
      embeddings: [
        {
          type: "button",
          text: "Yes",
          onClick: () => showMore(3),
        },
        {
          type: "button",
          text: "No",
          onClick: () => null,
        },
      ],
    },
    // {
    //   id: 1,
    //   sender: "bot",
    //   text: "아기 발진을 검색하셨군요. 기저귀 발진이 생겼을 때 대응 방법을 안내해드릴까요?",
    //   embeddings: [
    //     {
    //       type: "button",
    //       text: "Yes",
    //       onClick: () => showMore(3),
    //     },
    //     {
    //       type: "button",
    //       text: "No",
    //       onClick: () => null,
    //     },
    //   ],
    // },
    {
      id: 2,
      sender: "bot",
      text: "아기 엉덩이 피부발진 원인과 예방 - 기저귀 발진",
      embeddings: [
        {
          type: "image",
          imageUrl:
            "https://qdmxatvgkkiz17108123.cdn.ntruss.com/demo/demo1.png",
        },
        {
          type: "image",
          imageUrl:
            "https://qdmxatvgkkiz17108123.cdn.ntruss.com/demo/demo2.png",
        },
        {
          type: "image",
          imageUrl:
            "https://qdmxatvgkkiz17108123.cdn.ntruss.com/demo/demo3.png",
        },
      ],
    },
    {
      id: 3,
      sender: "bot",
      text: "",
      embeddings: [
        {
          type: "button",
          text: "자세히 보기",
          onClick: () => {
            window.open(
              "https://www.momq.co.kr/board/board.html?code=2020nemomq_board1&page=1&type=v&board_cate=&num1=999675&num2=00000&s_id=&stext=%C7%C7%BA%CE&ssubject=&shname=&scontent=&search_type=subject&number=8&lock=N",
              "_blank"
            );
          },
        },
      ],
    },
    {
      id: 4,
      sender: "bot",
      text: "도움이 되셨나요? 혹시 필요하시다면 근처의 가까운 피부과나 소아과를 예약해드릴까요?",
      embeddings: [
        {
          type: "button",
          text: "Yes",
          onClick: () => showMore(1),
        },
        {
          type: "button",
          text: "No",
          onClick: () => null,
        },
      ],
    },
    {
      id: 6,
      sender: "bot",
      text: "가까운 'ABC 병원'의 예약 가능한 가장 빠른 시간은 오늘 2시입니다. 이 시간으로 예약을 진행할까요?",
      // text: "그럼 아이가 불편하겠어요. 가까운 'ABC 병원'의 예약 가능한 가장 빠른 시간은 오늘 2시입니다. 이 시간으로 예약을 진행할까요?",
      embeddings: [
        {
          type: "button",
          onClick: () => {
            showMore(2);
          },
          text: "Yes",
        },
        { type: "button", onClick: () => {}, text: "No" },
      ],
    },
    {
      id: 7,
      sender: "bot",
      text: "'ABC 병원'에 2시 예약 완료했습니다.",
      embeddings: [
        {
          type: "hospital",
        },
      ],
    },
    {
      id: 8,
      sender: "bot",
      text: "병원까지 카카오 택시를 호출해드릴까요?",
      embeddings: [
        {
          type: "button",
          onClick: () => {
            showMore(3);
            // setShowUntil((s) => s + 3);
          },
          text: "Yes",
        },
        {
          type: "button",
          onClick: () => {},
          text: "No",
        },
      ],
    },
    {
      id: 9,
      sender: "bot",
      text: "택시 호출 완료했습니다. 5분 내 도착 예정입니다.",
      embeddings: [{ type: "taxi" }],
    },
    {
      id: 10,
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
      id: 11,
      sender: "bot",
      text: "원하시는 제품을 선택해주세요.",
      embeddings: [
        {
          type: "button",
          onClick: () => {
            showMore(1);
            // setShowUntil((s) => s + 1);
          },
          text: "파우더 주문",
        },
        {
          type: "button",
          onClick: () => {
            showMore(1);
            // setShowUntil((s) => s + 1);
          },
          text: "기저귀 주문",
        },
        {
          type: "button",
          onClick: () => {
            showMore(1);
            // setShowUntil((s) => s + 1);
          },
          text: "로션 주문",
        },
      ],
    },
    {
      id: 12,
      sender: "bot",
      text: "선택하신 제품들의 주문을 완료했습니다. 배송은 내일 도착 예정입니다. 아기의 상태가 빨리 나아지길 바라겠습니다.",
    },
  ] as any;

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
                  duration: m.sender === "bot" ? 0.7 : 0.3,
                  ease: "easeOut",
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
