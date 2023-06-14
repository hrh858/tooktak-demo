import Chat from "@/components/Chat";
import Header from "@/components/Header";
import InputBar from "@/components/InputBar";
import Message, { type MessageT } from "@/components/Message";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

const SHOW_MORE_DELAY_SECS = 0.6;

export default function Scenario1() {
  const [showUntil, setShowUntil] = useState(1);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const showMore = (howMany: number) => {
    const curr = showUntil;
    for (let i = 0; i < howMany; i++) {
      setTimeout(() => {
        setShowUntil(curr + i + 1);
      }, SHOW_MORE_DELAY_SECS * i * 1000);
    }
  };

  useEffect(() => {
    const msgContEl = messagesContainerRef.current;
    if (!msgContEl) return;
    msgContEl.scrollTo(0, msgContEl.scrollHeight);
  }, [showUntil, messagesContainerRef]);

  const MESSAGES: MessageT[] = [
    {
      id: 1,
      sender: "bot",
      text: "안녕하세요, 고객님. 아기의 성장과 계절 변화를 고려하면, 이제 기저귀 사이즈를 바꿀 때가 된 것 같아요. 더불어, 지난 여름에 아기가 발진으로 조금 고생하셨던 것을 기억하고 있습니다.\n이를 고려하여, 흡수력과 통기성이 더 좋은 '하기스 썸머 기저귀'를 한 사이즈 큰 4사이즈로 추천드립니다. 이 제품은 기저귀 내부의 온도를 낮추어 발진을 방지하는데 도움이 됩니다. 그리고 아기의 편안함을 위해 흡수력도 강화되어 있어요\n제품의 상세 정보와 후기는 여기서 확인하실 수 있습니다.",
      embeddings: [
        {
          type: "button",
          onClick: () => showMore(2),
          text: "제품 정보 보기",
        },
        { type: "button", onClick: () => { }, text: "다음에 보기" },
      ],
    },
    {
      id: 3,
      sender: "bot",
      text: "",
      embeddings: [
        {
          type: "product",
          imageUrl:
            "https://cdn6-kinx.makeshop.co.kr/shopimages/2020nemomq/0010040037222.jpg?1680092896",
          url: "https://www.momq.co.kr/shop/shopdetail.html?branduid=18512&search=%25BD%25E6%25B8%25D3&sort=sellcnt&xcode=001&mcode=004&scode=026&GfDT=bmh9W1Q%3D",
          name: "2023 하기스 네이처메이드 썸머 4단계 공용 112매 (밴드형)",
        },
        {
          type: "product",
          imageUrl:
            "https://cdn6-kinx.makeshop.co.kr/shopimages/2020nemomq/0010040037102.jpg?1680091769",
          url: "https://www.momq.co.kr/shop/shopdetail.html?branduid=18500&source=igodigital",
          name: "2023 하기스 매직컴포트 썸머 팬티 4단계 공용 104매 (팬티형)",
        },
        {
          type: "product",
          imageUrl:
            "https://cdn6-kinx.makeshop.co.kr/shopimages/2020nemomq/0010040037182.jpg?1680092578",
          url: "https://www.momq.co.kr/shop/shopdetail.html?branduid=18508&source=igodigital",
          name: "2023 하기스 네이처메이드 썸머 팬티 4단계 공용 96매 (팬티형)",
        },
      ],
    },
    {
      id: 2,
      text: "'하기스 썸머 기저귀' - 사진과 함께 제품 설명과 후기를 보여줍니다.\n또한 이 제품에 대한 소개 동영상도 함께 첨부해드릴게요",
      sender: "bot",
      embeddings: [
        {
          type: "button",
          onClick: () => showMore(2),
          text: "영상 보기",
        },
      ],
    },
    {
      id: 4,
      text: "",
      sender: "bot",
      embeddings: [{ type: "short" }],
    },
    // {
    //   id: 5,
    //   text: "여기 '하기스 썸머 기저귀'에 대해 더 자세히 알아보실 수 있는 동영상 링크입니다【77†(동영상 보기)】. 지금 바로 주문을 도와드릴까요?",
    //   sender: "bot",
    //   embeddings: [
    //     {
    //       type: "button",
    //       onClick: () => showMore(1),
    //       text: "Yes",
    //     },
    //     { type: "button", onClick: () => {}, text: "No" },
    //   ],
    // },
    {
      id: 6,
      text: "지금 바로 주문을 도와드릴까요?",
      sender: "bot",
      embeddings: [
        {
          type: "button",
          onClick: () => showMore(1),
          text: "Yes",
        },
        {
          type: "button",
          onClick: () => showMore(1),
          text: "No",
        },
      ],
    },
    {
      id: 7,
      text: "주문 완료했습니다! 배송은 내일 도착 예정입니다. 또한 여름이 다가오고 있으니, 아기와 함께 즐길 수 있는 물놀이 아이템들도 추천드립니다.",
      sender: "bot",
      embeddings: [
        {
          type: "button",
          text: "물놀이 아이템 추천 보기",
          onClick: () => showMore(2),
        },
      ],
    },
    {
      id: 8,
      text: "",
      sender: "bot",
      embeddings: [
        {
          type: "product",
          imageUrl:
            "https://cdn6-kinx.makeshop.co.kr/shopimages/2020nemomq/0010040035862.jpg?1679034698",
          url: "https://www.momq.co.kr/shop/shopdetail.html?branduid=17982&source=igodigital",
          name: "NEW 하기스 물놀이팬티 5단계 공용 12매 (EA)",
        },
        {
          type: "product",
          imageUrl:
            "https://www.momq.co.kr/shopimages/2020nemomq/0010030005462.jpg?1685584459",
          url: "https://www.momq.co.kr/shop/shopdetail.html?branduid=11222&search=%25B9%25B0%25B3%25EE%25C0%25CC&sort=sellcnt&xcode=001&mcode=003&scode=011&GfDT=aGh3UA%3D%3D",
          name: "그린핑거 물놀이 선크림 워터프루프 50ml (EA)",
        },
        {
          type: "product",
          imageUrl:
            "https://www.momq.co.kr/shopimages/2020nemomq/0010730000372.jpg?1675646779",
          url: "https://www.momq.co.kr/shop/shopdetail.html?branduid=5973&search=%25B9%25B0%25B3%25EE%25C0%25CC&sort=sellcnt&xcode=001&mcode=073&scode=001&GfDT=bWx3UFw%3D",
          name: "[먼치킨] 물놀이 오리장난감-온도감지",
        },
      ],
    },
    {
      id: 9,
      sender: "bot",
      text: "아기의 성장과 건강을 위해 항상 최선을 다하겠습니다. 추가로 필요한 것이 있으시면 언제든지 알려주세요.",
      embeddings: [],
    },
  ] as any;

  return (
    <Chat>
      <div className="w-full">
        <Header />
      </div>
      <AnimatePresence>
        <div
          ref={messagesContainerRef}
          className="w-full h-full overflow-y-auto py-2 md:py-4 gap-5 flex flex-col px-2 md:px-8"
        >
          {MESSAGES.splice(0, showUntil).map((m) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: m.sender === "bot" ? 0.7 : 0.2,
                ease: "easeIn",
              }}
            >
              <Message {...m} />
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
      <div className="mt-auto w-full py-2 md:py-4 px-2 md:px-8">
        <InputBar onSend={() => { }} />
      </div>
    </Chat>
  );
}
