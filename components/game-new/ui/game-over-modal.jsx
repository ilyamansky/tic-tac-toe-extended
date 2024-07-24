import { UiModal } from "../../uikit/ui-modal";
import { UiButton } from "../../uikit/ui-button";

export function GameOverModal({ winnerSymbol, winnerName, players }) {
  return (
    <UiModal
      width="md"
      isOpen={winnerSymbol}
      onClose={() => {
        console.log("close");
      }}
    >
      <UiModal.Header>Игра Завершена!</UiModal.Header>
      <UiModal.Body>
        <div>
          <div>Победитель: {winnerName}</div>
          <div className="p-2 justify-between grid grid-cols-2 gap-5">
            {players}
          </div>
        </div>
      </UiModal.Body>
      <UiModal.Footer>
        <UiButton size="md" variant="outline">
          Вернуться
        </UiButton>
        <UiButton size="md" variant="primary">
          Продолжить
        </UiButton>
      </UiModal.Footer>
    </UiModal>
  );
}
