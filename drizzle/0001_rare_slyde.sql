CREATE TABLE `applicants` (
	`id` int AUTO_INCREMENT NOT NULL,
	`positionId` int NOT NULL,
	`name` varchar(100) NOT NULL,
	`email` varchar(320) NOT NULL,
	`phone` varchar(20),
	`resumeUrl` text,
	`portfolioUrl` text,
	`aiUsageExperience` text,
	`status` enum('applied','reviewing','interview','rejected','offered') NOT NULL DEFAULT 'applied',
	`notes` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `applicants_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `positions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`dept` varchar(100) NOT NULL,
	`role` varchar(100) NOT NULL,
	`type` varchar(50) NOT NULL DEFAULT '정규직',
	`location` varchar(100) NOT NULL,
	`description` text NOT NULL,
	`tags` text,
	`isActive` boolean NOT NULL DEFAULT true,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `positions_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `uploadedFiles` (
	`id` int AUTO_INCREMENT NOT NULL,
	`applicantId` int NOT NULL,
	`fileName` varchar(255) NOT NULL,
	`fileKey` varchar(255) NOT NULL,
	`fileUrl` text NOT NULL,
	`fileSize` int NOT NULL,
	`mimeType` varchar(100) NOT NULL,
	`uploadedBy` varchar(100),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `uploadedFiles_id` PRIMARY KEY(`id`)
);
