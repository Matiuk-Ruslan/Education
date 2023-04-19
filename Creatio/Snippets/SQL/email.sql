---------------------------------------------------------------------
------------------------------- EMAIL -------------------------------
---------------------------------------------------------------------

--------------------------- Поиск email-а ---------------------------

DECLARE
            @Title       nvarchar(500),         -- тема письма
            @CategoryId  uniqueidentifier,      -- категория активности [E-mail]
            @TypeId      uniqueidentifier,      -- тип активности [E-mail]
            @SenderEmail nvarchar(1000),        -- email отправителя
            @SenderId    uniqueidentifier       -- id контакта отправителя [Технический специалист]
        SET @Title       = 'Нові клієнти у WebitelPhone Ева 793%'
        SET @CategoryId  = '8038a396-7825-e011-8165-00155d043204'
        SET @TypeId      = 'e2831dec-cfc0-df11-b00f-001d60e938c6'
        SET @SenderEmail = 'Reminders_Detractors@stores.eva.ua'
        SET @SenderId    = '25e6ad15-b6a4-46d6-b009-6f3dc00955ba'
SELECT 
[Id]                AS [Id], 
[CreatedOn]         AS [Дата создания], 
[Title]             AS [Тема], 
[StartDate]         AS [Дата отправки], 
[Recepient]         AS [Получатель], 
[EmailSendStatusId] AS [Ошибка], 
[ErrorOnSend]       AS [Описание ошибки]
FROM  [Activity] WITH(NOLOCK) 
WHERE [TypeId]             = @TypeId
AND   [ActivityCategoryId] = @CategoryId
AND   [Sender]             = @SenderEmail
AND   [SenderContactId]    = @SenderId
AND   [Title] LIKE @Title 
ORDER BY [CreatedOn] DESC
