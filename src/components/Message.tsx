import clsx from "clsx";
import dayjs from "dayjs";

export type MessageT = {
  id: number;
  sender: "user" | "bot";
  timestamp: Date;
  text: string;
  invertEmbeddings?: boolean;
  embeddings?: (
    | { type: "hospital" | "taxi" | "short" }
    | ProductEmbeddingT
    | ButtonEmbeddingT
    | ImageEmbeddingT
  )[];
};

type ImageEmbeddingT = {
  type: "image";
  imageUrl: string;
};

type ProductEmbeddingT = {
  type: "product";
  imageUrl: string;
  url: string;
  name: string;
};

type ButtonEmbeddingT = {
  type: "button";
  onClick: () => void;
  text: string;
};

export default function Message({
  sender,
  text,
  timestamp,
  embeddings,
  invertEmbeddings,
}: MessageT) {
  return (
    <div
      className={clsx([
        "flex flex-row gap-1",
        sender === "user" && "flex-row-reverse",
      ])}
    >
      <div
        className={clsx([
          "p-2 rounded-md w-fit flex gap-1 max-w-xs md:max-w-lg lg:max-w-3xl",
          !invertEmbeddings && "flex-col",
          invertEmbeddings && "flex-col-reverse",
          sender === "user" && "bg-highlight text-primary",
          sender === "bot" && "bg-secondary text-contrast",
        ])}
      >
        <span className="whitespace-pre-line">{text}</span>
        {embeddings && embeddings.length > 0 && (
          <div className="flex flex-row gap-2 w-full overflow-x-auto">
            {embeddings.map((e, idx) =>
              e.type === "hospital" ? (
                <HospitalReservationEmbedding key={idx} />
              ) : e.type === "taxi" ? (
                <TaxiReservationEmbedding key={idx} />
              ) : e.type === "product" ? (
                <ProductEmbedding {...e} key={idx} />
              ) : e.type === "short" ? (
                <ShortVideoEmbedding key={idx} />
              ) : e.type === "button" ? (
                <ButtonEmbedding {...e} key={idx} />
              ) : e.type === "image" ? (
                <ImageEmbedding {...e} key={idx} />
              ) : null
            )}
          </div>
        )}
      </div>
      <span className="text-xs mt-auto opacity-60 whitespace-nowrap">
        {dayjs(timestamp).format("HH:mm")}
      </span>
    </div>
  );
}

function HospitalReservationEmbedding() {
  return (
    <div className="flex flex-col bg-secondary text-contrast border-highlight border-2 w-fit p-2 rounded-md">
      <h1 className="font-bold text-2xl">예약완료</h1>
      <h2 className="">ABC병원</h2>
      <span className="text-sm">
        김세준 | {dayjs(new Date()).format("YYYY.MM.DD HH:mm")}
      </span>
    </div>
  );
}

function TaxiReservationEmbedding() {
  return (
    <div className="flex relative text-sm flex-col bg-secondary text-contrast border-2 border-highlight w-fit p-2 rounded-md">
      <h1 className="font-bold text-2xl">예약완료</h1>
      <img
        className="absolute mr-2 mt-2 right-0 top-0"
        width="50px"
        height="50px"
        src="/kakaot_logo.png"
      />
      <span>
        <b>출발지</b>: 신천동 29
      </span>
      <span>
        <b>목적지</b>: ABC병원
      </span>
      <span>
        <b>예상 소요시간</b>: 약 29분
      </span>
      <span>
        <b>차량정보</b>: 스타리아 서울 38아5307
      </span>
      <span className="mt-2 mb-2">
        차량이 출발지로 이동중입니다. 실시간 위치를 확인하시겠습니까?
      </span>
      <button className="w-full px-2 py-1 bg-highlight text-primary rounded-md">
        실시간 위치 확인하기
      </button>
    </div>
  );
}

function ProductEmbedding({ name, imageUrl, url }: ProductEmbeddingT) {
  return (
    <a
      href={url}
      className="w-40 h-40 shrink-0 border-highlight border-2 relative rounded-md"
      target="_blank"
    >
      <img className="object-cover w-full h-full rounded-md" src={imageUrl} />
      <span className="p-1 absolute bottom-0 text-xs whitespace-nowrap overflow-ellipsis w-full overflow-hidden text-primary bg-highlight">
        {name}
      </span>
    </a>
  );
}

function ShortVideoEmbedding() {
  return (
    <div className="w-fit overflow-hidden h-fit shrink-0 border-highlight border-2 relative rounded-md">
      <iframe
        width="179"
        height="318"
        src="https://www.youtube.com/embed/-GblA_EOYtA"
        title="2023 하기스 썸머! 흡수는 더 강력하게 기저귀 속 온도는 더 시원하게"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

function ButtonEmbedding({ onClick, text }: ButtonEmbeddingT) {
  return (
    <button
      onClick={onClick}
      className="px-2 py-1 bg-secondary text-highlight font-bold border-highlight border-2 rounded-md hover:bg-highlight hover:text-primary"
    >
      {text}
    </button>
  );
}

function ImageEmbedding({ imageUrl }: ImageEmbeddingT) {
  console.log(imageUrl);
  return (
    <div className="aspect-square w-fit overflow-hidden h-fit shrink-0 border-highlight border-2 relative rounded-md">
      <img
        alt={imageUrl}
        width="318"
        height="318"
        src={imageUrl}
        title="2023 하기스 썸머! 흡수는 더 강력하게 기저귀 속 온도는 더 시원하게"
      />
    </div>
  );
}
