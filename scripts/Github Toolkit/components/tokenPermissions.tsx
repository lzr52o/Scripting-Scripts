import { useThemePalette } from "./themePalette";
// Shared "Token 權限設定" explanation, used by the login page and by the
// add-account forms in Actions / Gist / Repository settings.
//
// Why a shared component, and why this layout: the old version was three
// (actually four) copies of one long Text per permission, e.g.
//   • Repository：repo（存取及修改 Repository）；delete_repo（刪除倉庫）
// The label, the scope code and the description were all in one line, so
// the line wrapped in the middle of a scope name and the three rows never
// lined up — hard to scan (see the screenshot). Now each permission is a
// two-column row with a fixed-width label, so all scopes and all
// descriptions start at the same x position:
//
//   Repository   repo · delete_repo
//                存取及修改 Repo；刪除Repo
//   Gist         gist
//                讀取、新增、編輯及刪除 Gist
//   Actions      repo · workflow
//                讀取、觸發及管理工作流程
//
// The scope names themselves (repo, delete_repo, gist, workflow) are
// GitHub's exact scope strings and must not be renamed — only the display
// label changed from "Repo" to "Repository".
//
// No explicit text colours are set here on purpose: the same component is
// used on the dark login card and inside light/dark system Lists, so it
// relies on the system primary / secondary labels and systemBlue, which
// adapt to both.
//
// lineLimit is set explicitly on the wrapping texts: inside a List row the
// description was otherwise cut off after one line ("刪除…"), so it now
// gets 2 lines and the note gets 4 instead of inheriting the row's limit.
import { HStack, Image, Text, VStack, Divider } from "scripting";
import { t } from "./i18n";

function PermissionRow({
  label,
  scopes,
  description,
}: {
  label: string;
  scopes: string;
  description: string;
}) {
  const { accent } = useThemePalette();
  return (
    <HStack spacing={10} alignment="top">
      <Text
        font={13} fontWeight="semibold"
        frame={{ width: 88, alignment: "leading" }}
      >
        {label}
      </Text>
      <VStack alignment="leading" spacing={3} frame={{ maxWidth: "infinity", alignment: "leading" }}>
        <Text font={12} fontWeight="semibold" foregroundStyle={accent}>
          {scopes}
        </Text>
        <Text font={12} foregroundStyle="secondaryLabel" lineLimit={2}>
          {description}
        </Text>
      </VStack>
    </HStack>
  );
}

export function TokenPermissions() {
  const { accent } = useThemePalette();
  return (
    <VStack alignment="leading" spacing={10} frame={{ maxWidth: "infinity", alignment: "leading" }}>
      <HStack spacing={8} alignment="center">
        <Image systemName="lock.shield.fill" frame={{ width: 16, height: 16 }} foregroundStyle={accent} />
        <Text font={15} fontWeight="semibold">{t("Token 權限設定", "Token 权限设置", "Token permissions")}</Text>
      </HStack>
      <Divider />
      <PermissionRow
        label="Repository"
        scopes="repo · delete_repo"
        description={t("存取及修改 Repo；刪除Repo", "访问及修改 Repo；删除Repo", "Access and modify Repo; delete Repo")}
      />
      <PermissionRow
        label="Gist"
        scopes="gist"
        description={t("讀取、新增、編輯及刪除 Gist", "读取、新增、编辑及删除 Gist", "Read, create, edit and delete Gist")}
      />
      <PermissionRow
        label="Action"
        scopes="repo · workflow"
        description={t("讀取、觸發及管理工作流程", "读取、触发及管理工作流程", "Read, trigger and manage workflows")}
      />
      <PermissionRow
        label="Follow"
        scopes="user:follow"
        description={t("Follow／取消 Follow 其他使用者（缺少時 GitHub 會回 404）", "Follow／取消 Follow 其他用户（缺少时 GitHub 会回 404）", "Follow / unfollow other users (GitHub returns 404 when missing)")}
      />
      <HStack spacing={6} alignment="top">
        <Image systemName="info.circle" frame={{ width: 13, height: 13 }} foregroundStyle="secondaryLabel" />
        <Text font={12} foregroundStyle="secondaryLabel" lineLimit={4}>
          {t("可使用一組包含上述權限的 classic PAT；若缺少所需權限，操作可能會失敗並回傳 403 錯誤", "可使用一组包含上述权限的 classic PAT；若缺少所需权限，操作可能会失败并返回 403 错误", "You can use a classic PAT with the above permissions; if required permissions are missing, operations may fail with a 403 error")}
        </Text>
      </HStack>
    </VStack>
  );
}
